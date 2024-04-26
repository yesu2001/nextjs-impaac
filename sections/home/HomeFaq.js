import * as React from 'react';
import PropTypes from 'prop-types';
import './customcss.css';
import { Tab, Tabs, Typography, Box, Divider, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Donating, ManageFund, ImpaacBasics, CreateFund } from '../../_mock/faqs';
import Iconify from '../../components/Iconify';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function HomeFaq() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ py: '4rem', background: '#fafafa', maxWidth: '1000px', margin: 'auto' }}>
      <Typography variant="h3" sx={{ textAlign: 'center', letterSpacing: '-0.09rem' }}>
        FAQs
      </Typography>

      <Divider sx={{ backgroundColor: 'steelblue', width: '50px', height: '5px', margin: 'auto' }} />
      <Typography variant="body1" sx={{ textAlign: 'center', m: 2 }}>
        Questions and Answers for Better Understanding
      </Typography>

      <Box sx={{ bgcolor: '#fff', mt: 4 }}>
        <Tabs
          variant="scrollable"
          value={value}
          onChange={handleChange}
          scrollButtons
          allowScrollButtonsMobile
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            pt: 1,
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
          }}
        >
          <Tab label="Impaac Basics" {...a11yProps(0)} sx={{ px: { md: 1, xs: '2px' } }} />
          <Tab label="Creating a Fundraiser" {...a11yProps(1)} sx={{ px: 1, xs: '2px' }} />
          <Tab label="Manage Your Campaign" {...a11yProps(2)} sx={{ px: 1, xs: '2px' }} />
          <Tab label="Donating" {...a11yProps(3)} sx={{ px: 1, xs: '2px' }} />
        </Tabs>

        <TabPanel value={value} index={0}>
          {ImpaacBasics.map((accordion, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<Iconify icon={'eva:arrow-ios-downward-fill'} width={20} height={20} />}>
                <Typography variant="subtitle1">{accordion.heading}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">{accordion.detail}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </TabPanel>

        <TabPanel value={value} index={1}>
          {CreateFund.map((accordion, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<Iconify icon={'eva:arrow-ios-downward-fill'} width={20} height={20} />}>
                <Typography variant="subtitle1">{accordion.heading}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">{accordion.detail}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </TabPanel>

        <TabPanel value={value} index={2}>
          {ManageFund.map((accordion, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<Iconify icon={'eva:arrow-ios-downward-fill'} width={20} height={20} />}>
                <Typography variant="subtitle1">{accordion.heading}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">{accordion.detail}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </TabPanel>

        <TabPanel value={value} index={3}>
          {Donating.map((accordion, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<Iconify icon={'eva:arrow-ios-downward-fill'} width={20} height={20} />}>
                <Typography variant="subtitle1">{accordion.heading}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">{accordion.detail}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </TabPanel>
      </Box>
    </Box>
  );
}
