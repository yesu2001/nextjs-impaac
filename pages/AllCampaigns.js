// "use client";
// import React from "react";
// import { Container, Stack, Typography, Box } from "@mui/material";
// import {
//   CampaignBoxFilterSidebar,
//   CampaignBoxList,
//   CampaignBoxSearch,
//   CampaignBoxSort,
//   CampaignBoxTagFiltered,
// } from "../sections/campaign/campaign-box";

// export default function AllCampaigns() {
//     const
//     const isDefault = category === "All";
//   return (
//     <Box sx={{ pt: 10 }}>
//       <Container maxWidth={"lg"} sx={{ mb: 5 }}>
//         <Stack
//           spacing={2}
//           direction={{ xs: "column", sm: "row" }}
//           alignItems={{ sm: "center" }}
//           justifyContent="space-between"
//           sx={{ my: 3 }}
//         >
//           <CampaignBoxSearch />

//           <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
//             <CampaignBoxFilterSidebar
//               onResetAll={handleResetFilter}
//               isOpen={openFilter}
//               onOpen={handleOpenFilter}
//               onClose={handleCloseFilter}
//             />

//             <CampaignBoxSort />
//           </Stack>
//         </Stack>

//         <Stack sx={{ mb: 3 }}>
//           {!isDefault && (
//             <>
//               <Typography variant="body2" gutterBottom>
//                 <strong>{filteredCampaigns.length}+</strong>
//                 &nbsp;Campaign found
//               </Typography>

//               <CampaignBoxTagFiltered
//                 filters={filters}
//                 isShowReset={!isDefault && !openFilter}
//                 onResetAll={handleResetFilter}
//               />
//             </>
//           )}
//         </Stack>

//         <CampaignBoxList
//           campaigns={filteredCampaigns}
//           loading={!campaigns.length && isDefault}
//         />
//       </Container>
//     </Box>
//   );
// }
