import React from "react";
import GoogleMapReact from "google-map-react";

//Icons
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import TelegramIcon from "@material-ui/icons/Telegram";

//img
import Logo from "../../../../assets/images/logo-cp.png";

function Footer() {
  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  let defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__res">
          <img src={Logo} />
        </div>

        <div className="footer__info">
          <div className="footer__info--item">
            <img src={Logo} />
          </div>

          <div className="footer__info--item">
            <p className="icon">
              <LocationOnIcon />
            </p>

            <p className="heading">Địa chỉ</p>

            <p className="text">Số 2 Đường 2A, Biên Hoà, Đồng Nai</p>
          </div>

          <div className="footer__info--item">
            <p className="icon">
              <PhoneInTalkIcon />
            </p>

            <p className="heading">Điện thoại</p>

            <p className="text">(024)-38523294</p>
          </div>

          <div className="footer__info--item">
            <p className="icon">
              <MailOutlineIcon />
            </p>

            <p className="heading">Email</p>

            <p className="text">nsc@cpseed.com</p>
          </div>

          <div className="footer__info--item">
            <p className="icon">
              <TelegramIcon />
            </p>

            <p className="heading">Fax</p>

            <p className="text">(024)-38527996</p>
          </div>
        </div>

        <div className="footer__media-social">
          <h4>Theo dõi chúng tôi tại</h4>

          <div className="footer__media-social--icons">
            <p>
              <FacebookIcon className="fb" />
            </p>
            <p>
              <InstagramIcon className="ig" />
            </p>
            <p>
              <TwitterIcon className="tw" />
            </p>
            <p>
              <YouTubeIcon className="yt" />
            </p>
          </div>
        </div>

        <div className="footer__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.71394688724!2d106.85114981462374!3d10.909330592231427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174df02cd60c293%3A0xbc7937c0e332700c!2zQy5QLiBWaWV0bmFtIENvcnBvcmF0aW9uLCAyLCAyQSBTdHJlZXQgLCBCaWVuIEhvYSBJbmR1c3RyaWFsIFpvbmUgSUkgLEJpZW4gSG9hIENpdHksIERvbmcgTmFpIFByb3ZpbmNlLCBMb25nIELDrG5oIFTDom4sIFRow6BuaCBwaOG7kSBCacOqbiBIw7JhLCDEkOG7k25nIE5haSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1615713175160!5m2!1svi!2s"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="footer__policy">
          <small>Term & Condition</small>
          <small>Privacy Policy</small>
          <small>
            Copyright &copy; 2021, Ltd. All rights reserved. CPSeeds CO.
          </small>
        </div>
        {/* <div className="ft-brand">
          <div className="logo-ft">
            <img src={Logo} />
          </div>
          <div className="ft-brand__bottom">
            <p className="item">company</p>
            <p className="item">media</p>
            <p className="item">pr agencies</p>
          </div>
        </div>

        <div className="ft-content">
          <div className="ft-content--top">
            <div className="t-left">
              <div className="ft-c-item">
                <div className="ft-media"></div>
              </div>
            </div>

            <div className="t-right">
              <div className="ft-c-item">
                <div className="ft-c-item__name">
                  <h4>tập đoàn giống cây trồng việt nam</h4>
                </div>
                <div className="ft-c-item__info m-l">
                  <div className="ft-address">
                    <p className="ft-address--icon">
                      <InstagramIcon />
                    </p>

                    <p className="ft-address--title">Địa chỉ:&nbsp;</p>

                    <p className="ft-address--info">
                      Số 1 Lương Định Của, Phương Mai, Đống Đa, Hàng Nội
                    </p>
                  </div>

                  <div className="ft-address">
                    <p className="ft-address--icon">
                      <InstagramIcon />
                    </p>

                    <p className="ft-address--title">Đỉện thoại:&nbsp;</p>

                    <p className="ft-address--info">(024)-38523294</p>
                  </div>

                  <div className="ft-address">
                    <p className="ft-address--icon">
                      <InstagramIcon />
                    </p>

                    <p className="ft-address--title">Email:&nbsp;</p>

                    <p className="ft-address--info">nsc@vinaseed.com.vn</p>
                  </div>

                  <div className="ft-address">
                    <p className="ft-address--icon">
                      <InstagramIcon />
                    </p>

                    <p className="ft-address--title">Fax:&nbsp;</p>

                    <p className="ft-address--info">(024)-38527996</p>
                  </div>
                </div>
              </div>

              <div className="ft-c-item">
                <div className="ft-c-item__name">
                  <h4>theo dõi chúng tôi tại</h4>
                </div>

                <div className="ft-c-item__info">
                  <div className="ft-media">
                    <p>
                      <FacebookIcon />
                    </p>
                    <p>
                      <InstagramIcon />
                    </p>
                    <p>
                      <TwitterIcon />
                    </p>
                    <p>
                      <LinkedInIcon />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          

          
        </div> */}
      </div>
    </div>
  );
}

export default Footer;
