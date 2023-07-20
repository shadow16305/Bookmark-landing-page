import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

export default function BasicAccordion() {
    return (
        <div>
            <div className='container mx-auto max-w-xl h-full lg:h-screen mt-11 lg:mt-0'>
                <div className='flex flex-col items-center'>
                    <h2 className='text-4xl font-medium text-center'>Frequently Asked Questions</h2>
                    <p className="mt-5 text-center opacity-50 text-lg leading-7 w-11/12">Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
                </div>
                <div className='mt-9'>
                    <Accordion>
                        <AccordionSummary
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>What is Bookmark?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>How can I request a new browser?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>Is there a mobile app?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>What about other Chromium browsers?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className='flex justify-center'>
                    <button className='mt-7 bg-indigo-500 duration-150 px-4 md:px-6 text-sm py-3 drop-shadow-lg border-2 border-indigo-500 hover:bg-transparent hover:border-indigo-500 hover:text-indigo-500 text-white rounded-md font-medium'>More info</button>
                </div>
            </div>
        </div>
    );
}