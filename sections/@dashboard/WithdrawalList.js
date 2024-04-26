"use client";
import { useEffect, useState } from "react";
// @mui
import {
  Box,
  Card,
  Container,
  Table,
  TableBody,
  TableContainer,
  TablePagination,
} from "@mui/material";
// hooks
import useSettings from "@/hooks/useSettings";
import useTable, { emptyRows, getComparator } from "@/hooks/useTable";
import useTabs from "@/hooks/useTabs";
// components
import HeaderBreadcrumbs from "@/components/HeaderBreadcrumbs";
import Scrollbar from "@/components/Scrollbar";
import {
  TableEmptyRows,
  TableHeadCustom,
  TableNoData,
} from "@/components/table";
// sections
import useAuth from "@/hooks/useAuth";
import {
  WithdrawalTableRow,
  WithdrawalTableToolbar,
} from "@/sections/@dashboard/withdrawal/list";
import { useRouter } from "next/navigation";
import { getUserWithdrawal } from "@/helper/withdrawal";
import CircularLoader from "@/components/CircularLoader";

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: "withdrawalId", label: "Withdrawal Id", align: "left" },
  { id: "createDate", label: "Create", align: "left" },
  { id: "amount", label: "Amount", align: "center", width: 140 },
  { id: "bankAccount", label: "Bank Account", align: "center", width: 240 },
  { id: "status", label: "Status", align: "left" },
];

// ----------------------------------------------------------------------

export default function WithdrawalList() {
  const { themeStretch } = useSettings();
  const { user } = useAuth();
  const route = useRouter();

  const {
    dense,
    page,
    order,
    orderBy,
    rowsPerPage,
    setPage,
    //
    selected,
    setSelected,
    onSelectRow,
    //
    onSort,
    onChangePage,
    onChangeRowsPerPage,
  } = useTable({ defaultOrderBy: "createDate" });
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState([]);

  const [filterName, setFilterName] = useState("");

  const [filterService, setFilterService] = useState("all");

  const { currentTab: filterStatus } = useTabs("all");

  useEffect(() => {
    setLoading(true);
    preload();
  }, [user]);

  const preload = () => {
    if (!user.id || !user.token) {
      return;
    }

    getUserWithdrawal(user.id, user.token)
      .then((data) => {
        if (data.length) {
          setTableData(data);
        } else {
          setTableData([]);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  const handleFilterName = (filterName) => {
    setFilterName(filterName);
    setPage(0);
  };

  const handleDeleteRow = (id) => {
    const deleteRow = tableData?.filter((row) => row.id !== id);
    setSelected([]);
    setTableData(deleteRow);
  };

  const handleEditRow = (id) => {
    // navigate(PATH_DASHBOARD.invoice.edit(id));
    route.push(``);
  };

  const handleViewRow = (id) => {
    // navigate(PATH_DASHBOARD.invoice.view(id));
  };

  // const dataFiltered = applySortFilter({
  //   tableData,
  //   comparator: getComparator(order, orderBy),
  //   filterName,
  //   filterService,
  //   filterStatus,
  // });

  const isNotFound = false;
  //   (!dataFiltered?.length && !!filterName) ||
  //   (!dataFiltered?.length && !!filterStatus) ||
  //   (!dataFiltered?.length && !!filterService);

  return (
    <Container maxWidth={themeStretch ? false : "lg"}>
      <HeaderBreadcrumbs
        heading="Withdrawal List"
        links={[
          { name: "Dashboard", href: "/dashboard/app" },
          { name: "Withdrawal", href: "/dashboard/withdrawal" },
          { name: "List" },
        ]}
      />

      {loading && <CircularLoader />}

      <Card>
        {/* <Scrollbar> */}
        <TableContainer sx={{ minWidth: 800, position: "relative" }}>
          <Table size={dense ? "small" : "medium"}>
            <TableHeadCustom
              order={order}
              orderBy={orderBy}
              headLabel={TABLE_HEAD}
              rowCount={tableData.length}
              numSelected={selected.length}
              onSort={onSort}
            />

            <TableBody>
              {tableData
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((row) => (
                  <WithdrawalTableRow
                    key={row._id}
                    row={row}
                    selected={selected.includes(row.id)}
                    onSelectRow={() => onSelectRow(row.id)}
                    onViewRow={() => handleViewRow(row.id)}
                    onEditRow={() => handleEditRow(row.id)}
                    onDeleteRow={() => handleDeleteRow(row.id)}
                  />
                ))}

              {/* <TableEmptyRows
                  emptyRows={emptyRows(page, rowsPerPage, tableData.length)}
                /> */}

              <TableNoData isNotFound={isNotFound} />
            </TableBody>
          </Table>
        </TableContainer>
        {/* </Scrollbar> */}

        <Box sx={{ position: "relative" }}>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={tableData?.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={onChangePage}
            onRowsPerPageChange={onChangeRowsPerPage}
          />
        </Box>
      </Card>
    </Container>
  );
}

// ----------------------------------------------------------------------

function applySortFilter({
  tableData,
  comparator,
  filterName,
  filterStatus,
  filterService,
  filterStartDate,
  filterEndDate,
}) {
  console.log(tableData);
  const stabilizedThis = tableData?.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  tableData = stabilizedThis?.map((el) => el[0]);

  if (filterName) {
    tableData = tableData?.filter(
      (item) => item._id.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
    );
  }

  if (filterStatus !== "all") {
    tableData = tableData?.filter((item) => item.status === filterStatus);
  }

  if (filterService !== "all") {
    tableData = tableData?.filter((item) =>
      item.items.some((c) => c.service === filterService)
    );
  }

  if (filterStartDate && filterEndDate) {
    tableData = tableData?.filter(
      (item) =>
        item.createdAt.getTime() >= filterStartDate.getTime() &&
        item.createdAt.getTime() <= filterEndDate.getTime()
    );
  }

  return tableData;
}
