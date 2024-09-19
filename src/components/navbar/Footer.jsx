import React from "react";

const Footer = () => {
  return (
    <section className="fotter static bottom-0 w-full overflow-hidden bg-gray-900 text-white py-8">
      <div className="container relative z-10 px-4">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 p-8">
            <a href="#">
              <div className="inline-flex items-center">
                <span className="ml-4 text-lg font-bold">Drmo Cart</span>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <ul className="d-flex flex-wrap">
              <li className="py-2 px-2">
                <a
                  className="font-medium text-white hover:text-gray-700"
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="py-2 px-2">
                <a
                  className="font-medium text-white hover:text-gray-700"
                  href="#"
                >
                  Terms of Service
                </a>
              </li>
              <li className="py-2 px-2">
                <a
                  className="font-medium text-white hover:text-gray-700"
                  href="#"
                >
                  Return Policy
                </a>
              </li>
              <li className="py-2 px-2">
                <a
                  className="font-medium text-white hover:text-gray-700"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 p-8">
            <div className="d-flex flex-wrap">
              <div className="p-2">
                <a href="#">
                  <div className="d-flex align-items-center justify-center rounded-circle border border-gray-300 hover:border-gray-400">
                    <svg
                      width="8"
                      height="14"
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ color: "white" }}
                    >
                      <path
                        d="M5.55736 5.2L5.55736 3.88C5.55736 3.308 5.69631 3 6.66894 3H7.87315V0.800003L6.02052 0.800003C3.70473 0.800003 2.77841 2.252 2.77841 3.88V5.2H0.925781L0.925781 7.4H2.77841L2.77841 14H5.55736L5.55736 7.4H7.59526L7.87315 5.2H5.55736Z"
                        fill="#ffffff"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
              <div className="p-2">
                <a href="#">
                  <div className="d-flex align-items-center justify-center rounded-circle border border-gray-300 hover:border-gray-400">
                    <svg
                      width="14"
                      height="11"
                      viewBox="0 0 14 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.6655 1.39641C13.1901 1.60149 12.6728 1.74907 12.1399 1.80656C12.6931 1.47788 13.1074 0.958619 13.3051 0.346204C12.7859 0.655036 12.2172 0.871595 11.6241 0.986274C11.3762 0.721276 11.0764 0.510168 10.7434 0.366102C10.4104 0.222036 10.0512 0.1481 9.68836 0.148902C8.22024 0.148902 7.03953 1.33893 7.03953 2.79928C7.03953 3.00436 7.06439 3.20943 7.10478 3.40673C4.90649 3.29177 2.94589 2.24155 1.64246 0.633614C1.40495 1.03927 1.2805 1.50117 1.28203 1.97123C1.28203 2.89094 1.74965 3.70191 2.46274 4.17885C2.0425 4.1623 1.63211 4.0468 1.26494 3.84173V3.87435C1.26494 5.16226 2.17533 6.22956 3.38866 6.47502C3.16084 6.5342 2.92649 6.56447 2.69111 6.56513C2.51866 6.56513 2.35554 6.54804 2.19086 6.52474C2.52643 7.57495 3.50362 8.33775 4.66724 8.3626C3.75685 9.07569 2.61654 9.49515 1.37835 9.49515C1.15619 9.49515 0.951119 9.48738 0.738281 9.46253C1.91278 10.216 3.30632 10.651 4.80706 10.651C9.67904 10.651 12.345 6.61484 12.345 3.11155C12.345 2.99659 12.345 2.88162 12.3372 2.76666C12.853 2.38914 13.3051 1.92152 13.6655 1.39641Z"
                        fill="#ffffff"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
              <div className="p-2">
                <a href="#">
                  <div className="d-flex align-items-center justify-center rounded-circle border border-gray-300 hover:border-gray-400">
                    <svg
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.00094 0.360001C6.09046 0.360001 5.85022 0.368801 5.09958 0.402241C4.34894 0.437441 3.83766 0.555361 3.38974 0.729601C2.9199 0.906321 2.49433 1.18353 2.14278 1.54184C1.78468 1.89357 1.50751 2.31909 1.33054 2.7888C1.1563 3.23584 1.0375 3.748 1.00318 4.496C0.969738 5.2484 0.960937 5.48776 0.960937 7.40088C0.960937 9.31224 0.969738 9.5516 1.00318 10.3022C1.03838 11.052 1.1563 11.5633 1.33054 12.0112C1.51094 12.4741 1.75118 12.8666 2.14278 13.2582C2.5335 13.6498 2.92598 13.8909 3.38886 14.0704C3.83766 14.2446 4.34806 14.3634 5.09782 14.3978C5.84934 14.4312 6.0887 14.44 8.00094 14.44C9.91318 14.44 10.1517 14.4312 10.9032 14.3978C11.6521 14.3626 12.1651 14.2446 12.613 14.0704C13.0826 13.8936 13.5078 13.6164 13.8591 13.2582C14.2507 12.8666 14.4909 12.4741 14.6713 12.0112C14.8455 11.5633 14.9643 11.051 14.9987 10.3022C15.0321 9.5516 15.0409 9.31224 15.0409 7.40088C15.0409 5.48776 15.0321 5.2484 14.9987 4.496C14.9643 3.74752 14.8455 3.23536 14.6713 2.7888C14.4909 2.31909 14.2507 1.92522 13.8591 1.54184C13.5078 1.18353 13.0826 0.906321 12.613 0.729601C12.1649 0.555361 11.6527 0.436561 10.9032 0.402241C10.1517 0.368801 9.91234 0.360001 8.00094 0.360001ZM8.00094 11.464C6.06754 11.464 4.53782 9.93424 4.53782 8.00084C4.53782 6.06744 6.06754 4.53772 8.00094 4.53772C9.93434 4.53772 11.4641 6.06744 11.4641 8.00084C11.4641 9.93424 9.93434 11.464 8.00094 11.464ZM12.1003 4.14772C11.8483 4.14772 11.6269 4.04628 11.457 3.87477C11.2855 3.70484 11.1841 3.48348 11.1841 3.23148C11.1841 2.97948 11.2855 2.75812 11.457 2.58819C11.6269 2.41668 11.8483 2.31524 12.1003 2.31524C12.3523 2.31524 12.5737 2.41668 12.7437 2.58819C12.9146 2.75812 13.0161 2.97948 13.0161 3.23148C13.0161 3.48348 12.9146 3.70484 12.7437 3.87477C12.5737 4.04628 12.3523 4.14772 12.1003 4.14772Z"
                        fill="#ffffff"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 w-full border-t border-gray-800 pt-8 text-center text-sm">
          <p className="text-gray-400">
            © Drmo Cart, 2024. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
