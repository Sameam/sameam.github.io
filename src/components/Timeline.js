import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './timeline.css';
import { Typography } from '@material-ui/core';


const Timeline = ({data}) => {

  return (
    <VerticalTimeline>
      {data.map((item) => {
        return (
          <VerticalTimelineElement
            key={item.title}
            date={item.date}
          >
            <Typography variant='h5' className='vertical-timeline-element-title' style={{fontFamily:'Supermercado One'}}>
              {item.title}
            </Typography>
            <Typography variant='h6' className='vertical-timeline-element-subtitle' style={{fontFamily:'Supermercado One'}}>
              {item.subtitle}
            </Typography>
            <div>
              <p>{item.description}</p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: item.html }} />
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};

export default Timeline;