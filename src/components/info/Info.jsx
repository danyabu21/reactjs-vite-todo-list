import React from 'react';
import './Info.scss';
import { Tooltip } from 'react-tooltip';
import { VscInfo } from 'react-icons/vsc';

function Info({ label, content }) {
  return (
    <div className=" position-relative info d-flex align-items-center justify-content-between gap-2">
      {label && <p className="paragraph text-center small mb-0">{label}</p>}
      <button
        className="bg-transparent border-0"
        data-tooltip-id="deleted-info"
        data-tooltip-content={content}
        data-tooltip-place="bottom"
      >
        <VscInfo />
      </button>
      <Tooltip id="deleted-info" />
    </div>
  );
}

export default Info;
