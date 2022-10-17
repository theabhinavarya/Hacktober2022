import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Experience = () => {
  return (
    <section id='experience' className='py-10 relative'>
      <div className='mt-8 text-gray-100 text-center'>
        <h3 className='text-4xl font-semibold'>My <span className='text-cyan-600'>Experience</span></h3>
        <p className='text-gray-400 mt-3 text-lg'>My awesome works</p>
        <div className='flex items-center justify-center mt-12  flex-wrap'>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body5"
                color="white"
              >
                August, 2022 - Present
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <LocationOnIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h5" component="span" color="cyan">
                  Frontend Developer Intern @Manav Rachna
                </Typography>
                <Typography>
                  Worked on an elderly matrimonial site project tech stack used was Reactjs, Tailwind CSS, node js, express and mongoDB.
                  My task was to create proper authentication page setup on web2 to provide a hassle free experience to users for login,sign up etc and the landing page.
                  It also involved setting up jot[JWT] for secure transmission of information.
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="white"
              >
                April, 2022 - September, 2022
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <LocationOnIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h5" component="span" color="cyan">
                  Graphic Design Intern @Sudan's Tech
                </Typography>
                <Typography>
                  I was in charge of making the UI for the web pages and different website components.<br />
                  In addition, I was responsible for creating social media posts, batches, posters, and brochures.
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator />
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </section>
  )
}

export default Experience