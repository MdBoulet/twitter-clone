import { Avatar } from '@mui/material';
import React from 'react';
import "./DevInfo.css";

function DevInfo() {
  return <div class="devInfo">
      <Avatar src="https://avatars.githubusercontent.com/u/83733778?v=4" />
      <div className="info">
        <a href="https://gn.linkedin.com/in/mohamed-boulet-camara-27b4261a4" target="_blank">
            <h3>MdBoulet</h3>
            <span>@mdboulet</span>
        </a>
      </div>
  </div>;
}

export default DevInfo;
