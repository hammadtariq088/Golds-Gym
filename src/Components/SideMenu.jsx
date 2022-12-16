import React from "react";

const SideMenu = () => {
  return (
    // <!--== Start Side Menu ==-->
    <aside className="off-canvas-wrapper">
      <div className="off-canvas-inner">
        <div className="off-canvas-overlay d-none"></div>
        {/* <!-- Start Off Canvas Content Wrapper --> */}
        <div className="off-canvas-content">
          {/* <!-- Off Canvas Header --> */}
          <div className="off-canvas-header">
            <div className="close-action">
              <button className="btn-close">
                <i className="pe-7s-close"></i>
              </button>
            </div>
          </div>

          <div className="off-canvas-item">
            {/* <!-- Start Mobile Menu Wrapper --> */}
            <div className="res-mobile-menu">
              {/* <!-- Note Content Auto Generate By Jquery From Main Menu --> */}
            </div>
            {/* <!-- End Mobile Menu Wrapper --> */}
          </div>
          {/* <!-- Off Canvas Footer --> */}
          <div className="off-canvas-footer"></div>
        </div>
        {/* <!-- End Off Canvas Content Wrapper --> */}
      </div>
    </aside>
    // <!--== End Side Menu ==-->
  );
};

export default SideMenu;
