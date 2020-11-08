import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
/* =========================================================================
FONTS
========================================================================== */
@font-face {
  font-family: "Caros Soft Regular";
  src: url("/fonts/carossoft/CarosSoftMedium.woff");
  font-style: normal;
  font-weight: 200;
}

/* =========================================================================
reset
========================================================================== */
html,
body {
  overflow-x: hidden; /* Prevent scroll on narrow devices */
}

body {
  color: #787777 !important;
  font-family: 'Caros Soft Regular' !important;
  background: rgb(247,247,247);
  background: linear-gradient(0deg, rgba(247,247,247,1) 0%, rgba(238,238,238,1) 100%);
  font-size: 14px;
}


.header-mdb {
  background: #ffffff;
}
/* =========================================================================
BOX
========================================================================== */
.box {
  max-width: 1366px;
  margin: 0 auto;
  min-height: 300px;
  background: #ffffff;
}

h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  font-weight: 700 !important;
  line-height: 1.1;
  color: inherit;
}

.uppercase {
  text-transform: uppercase;
}

.f100 {font-weight: 100 !important;}
.f200 {font-weight: 200 !important;}
.f300 {font-weight: 300 !important;}
.f400 {font-weight: 400 !important;}
.f500 {font-weight: 500 !important;}
.f600 {font-weight: 600 !important;}
.f700 {font-weight: 700 !important;}
.f800 {font-weight: 800 !important;}
.f900 {font-weight: 900 !important;}

.fs8 {font-size: 8px !important;}
.fs9 {font-size: 9px !important;}
.fs10 {font-size: 10px !important;}
.fs11 {font-size: 11px !important;}
.fs12 {font-size: 12px !important;}
.fs13 {font-size: 13px !important;}
.fs14 {font-size: 14px !important;}
.fs15 {font-size: 15px !important;}
.fs16 {font-size: 16px !important;}
.fs18 {font-size: 18px !important;}
.fs20 {font-size: 20px !important;}
.fs24 {font-size: 24px !important;}
.fs30 {font-size: 30px !important;}
.fs36 {font-size: 36px !important;}
.fs40 {font-size: 40px !important;}
.fs50 {font-size: 50px !important;}
.fs60 {font-size: 60px !important;}

.fc-green { color: #4FAF98 !important;}
.fc-green-light { color: #A3D2B1 !important;}
.fc-blue { color: #004178 !important;}
.fc-blue-light { color: #CBDDFE !important;}
.fc-gray { color: #FCDBCF !important;}
.fc-gray-light { color: #F1EFE3 !important;}
.fc-gray-dark { color: #F6B29D !important;}

.bg-green { background: #4FAF98 !important;}
.bg-green-light { background: #A3D2B1 !important;}
.bg-blue { background: #004178 !important;}
.bg-blue-light { background: #CBDDFE !important;}
.bg-gray { background: #FCDBCF !important;}
.bg-gray-light { background: #F1EFE3 !important;}
.bg-gray-dark { background: #F6B29D !important;}

.min-w70 {
  min-width: 70px;
}


a {
  color: #004178;
  text-decoration: none;
}
a:active,
a:hover {
  color: #4FAF98;
  text-decoration: none;
}

.bt-bg {
  fill:#004178;
}
.bt {
  fill:#FFFFFF;
  font-family: 'Caros Soft Regular' !important;
  font-size:12px;
}

/* =========================================================================
posts
========================================================================== */
.featured {

}

.post-loop {
  padding-bottom: 70px;
}

.post {
  margin: 50px 0;
}

.post img {
  margin-bottom: 10px;
}

.post p {
  font-size: 12px;
}

.post h3 {
  color: #004178;
  font-size: 20px;
}

.post-home {
  margin: 0;
  padding: 0;
}

/* post-spotlight */
.post-spotlight  {
  display: inline-block;
  position: relative;
  margin: 0;
  padding: 0;
}

.post-spotlight  figcaption {
  position: absolute;
  top: 50px;
  left: 130px;
}

.post-spotlight  figcaption h4 {
  color: #004178;
  max-width: 190px;
}

.post-spotlight  figcaption p {
  color: #004178;
  max-width: 300px;
  font-size: 14px;
}

/* post-content */
.post-content  {
  display: inline-block;
  position: relative;
  margin: 0;
  padding: 0;
}

.post-content  figcaption {
  position: absolute;
  bottom: 50px;
  left: 50px;
}

.post-content  figcaption h4 {
  color: #ffffff;
  max-width: 400px;
  font-size: 18px;
}

.post-content  figcaption p {
  color: #ffffff;
  max-width: 350px;
  font-size: 14px;
}

/* post-mobile */
.post-mobile  {
  display: inline-block;
  position: relative;
  margin: 0;
  padding: 0;
}

.post-mobile  figcaption {
  position: absolute;
  bottom: 50px;
  left: 50px;
}

.post-mobile  figcaption h4 {
  color: #ffffff;
  max-width: 250px;
}

.post-mobile  figcaption p {
  color: #ffffff;
  max-width: 300px;
  font-size: 14px;
}

.line {
  width: 90%;
  margin: 0 auto;
  height: 2px;
  background: #4FAF98;
  margin-top: 25px;
  margin-bottom: 25px;
}

/* =========================================================================
title pge
========================================================================== */
.title-page {
  width: 100%;
  padding: 50px 0;
  background: #004178;
}

.title-page h1 {
  color: #FFFFFF;
  font-size: 28px;
}

.title-page h1 span {
  color: #A3D2B1;
  font-size: 20px;
}

.title-single {
  width: 100%;
  padding: 60px 0;
  text-align: center;
}

.title-single h1 {
  color: #004178;
}

.title-single p {
  color: #797979;
}

/* =========================================================================
sidebar
========================================================================== */
.sidebar {
  margin: 50px 0;
}

.sidebar h4 {
  color: #a3d2b1;
  font-size: 20px;
}

.sidebar-menu{
  list-style: none;
  padding: 0;
  margin: 0;
  margin-left: -40px;
}

.sidebar-menu ul {
  counter-reset: mynum;
}

.sidebar-menu ul li {
  list-style: none;
  padding: 10px 0;
}

.sidebar-menu ul li:before{
  content: counter(mynum) " ";
  counter-increment: mynum;
  color: #F6B29D;
  font-size: 24px;
}

.sidebar-menu ul li a {
  color: #838383;
  font-size: 13px;
  margin-left: 35px;
  margin-top: -30px;
  display: block;
}

.sidebar-menu ul li a:hover {
  text-decoration: none;
  color: #004178;
}

/* =========================================================================
btn's
========================================================================== */
.form-cont {
  border-radius: 0px !important;
}

.btn-mdb-blue {
  color: #fff !important;
  background-color: #004178 !important;
  border-color: #004178 !important;
  clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
  padding-right: 90px !important;
  padding-left: 20px !important;
  border-radius: 0px !important;
}

.btn-mdb-blue:hover {
  color: #fff;
  background-color: #0069d9;
  border-color: #0062cc;
}

.btn-mdb-blue:focus, .btn-mdb-blue.focus {
  color: #fff;
  background-color: #0069d9;
  border-color: #0062cc;
  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
}

.btn-mdb-blue.disabled, .btn-mdb-blue:disabled {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.btn-mdb-blue:not(:disabled):not(.disabled):active, .btn-mdb-blue:not(:disabled):not(.disabled).active,
.show > .btn-mdb-blue.dropdown-toggle {
  color: #fff;
  background-color: #0062cc;
  border-color: #005cbf;
}

.btn-mdb-blue:not(:disabled):not(.disabled):active:focus, .btn-mdb-blue:not(:disabled):not(.disabled).active:focus,
.show > .btn-mdb-blue.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
}


/* =========================================================================
brand-top
========================================================================== */
.brand-top {
  padding: 10px 0;
}

.brand-top a {
  color: #004178;
  text-decoration: none;
}

.brand-top a:hover {
  color: #4FAF98;
  text-decoration: none;
}

/* =========================================================================
brand-top
========================================================================== */
.mobile-menu {
  padding: 10px 0;
}

.mobile-menu a {
  color: #004178;
}

.mobile-menu a i {
  margin-top: 8px;
}

/* =========================================================================
navbar
========================================================================== */
.navbar-mdb {
  background: #A3D2B1;
  font-size: 14px;
}

.navbar-mdb .navbar-brand {
  color: #fff;
}

.navbar-mdb .navbar-brand:hover, .navbar-mdb .navbar-brand:focus {
  color: #fff;
}

.navbar-mdb .navbar-nav .nav-link {
  color: #004178;
  margin-left: 12px;
  margin-right: 12px;
}


.navbar-mdb .navbar-nav .nav-link:first-child {
  margin-left: 0;
  padding-left: 0;
}

.navbar-mdb .navbar-nav .nav-link:hover, .navbar-mdb .navbar-nav .nav-link:focus {
  color: #ffffff;
}

.navbar-mdb .navbar-nav .nav-link.disabled {
  color: rgba(255, 255, 255, 0.25);
}

.navbar-mdb .navbar-nav .show > .nav-link,
.navbar-mdb .navbar-nav .active > .nav-link,
.navbar-mdb .navbar-nav .nav-link.show,
.navbar-mdb .navbar-nav .nav-link.active {
  color: #fff;
}

.navbar-mdb .navbar-toggler {
  color: rgba(255, 255, 255, 0.5);
  border-color: rgba(255, 255, 255, 0.1);
}

.navbar-mdb .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.navbar-mdb .navbar-text {
  color: rgba(255, 255, 255, 0.5);
}

.navbar-mdb .navbar-text a {
  color: #fff;
}

.navbar-mdb .navbar-text a:hover, .navbar-mdb .navbar-text a:focus {
  color: #fff;
}

/* =========================================================================
footer
========================================================================== */
.line-f {
  width: 23px;
  height: 3px;
  background: #4FAF98;
  margin-bottom: 15px;
}

.line-h {
  width: 13px;
  height: 2px;
  background: #CBDDFE;
  margin-bottom: 15px;
}

.footer-mdb {
  background: #A3D2B1;
  padding: 60px 0;
}

.footer-mdb h4{
  color: #004178;
  font-size: 20px;
}

.footer-mdb p{
  color: #666;
  font-size: 14px;
}

.footer-mdb ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.footer-mdb ul li {
  list-style: none;
  padding: 4px 0;
}

.footer-mdb ul li a{
  color: #004178;
  font-size: 14px;
}

.footer-mdb ul li a:hover{
  text-decoration: none;
  color: #fff;
}

.nav-social li a i{
  color: 4FAF98 !important;
}

/* =========================================================================
MODAL FULL
========================================================================== */
.modal-full {
  min-width: 100%;
  margin: 0;
}

.modal-full .modal-content {
  border-radius: 0px !important;
  border: 1px solid #fff;
}

.modal-content {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: none !important;
  border-radius: 0 !important;
  outline: 0;
}

/* =========================================================================
MODAL LEFT
========================================================================== */
.modal.left .modal-dialog {
  position: fixed;
  margin: auto;
  width: 320px;
  height: 100%;
  -webkit-transform: translate3d(0%, 0, 0);
  -ms-transform: translate3d(0%, 0, 0);
  -o-transform: translate3d(0%, 0, 0);
  transform: translate3d(0%, 0, 0);
}

.modal.left .modal-content {
  height: 100%;
  overflow-y: auto;
}

.modal.left .modal-body {
  padding: 15px 15px 80px;
}

.modal.left.fade .modal-dialog {
  left: -320px;
  -webkit-transition: opacity 0.3s linear, left 0.3s ease-out;
  -moz-transition: opacity 0.3s linear, left 0.3s ease-out;
  -o-transition: opacity 0.3s linear, left 0.3s ease-out;
  transition: opacity 0.3s linear, left 0.3s ease-out;
}

.modal.left.fade.show .modal-dialog {
  left: 0;
}

/* ----- MODAL STYLE ----- */
.modal-content {
  border-radius: 0;
  border: none;
}

.modal-header {
  border-bottom-color: #eeeeee;
  background-color: #fafafa;
}


/*=========================================
PAGE TTTLE
=========================================*/

.line-1 {
  line-height: 1.3;
}

.mbd-sub {
  padding: 15px 0 0 0;
  background: #0c0c0c;
}

.mbd-sub h1 {
  color: #FFF;
  text-transform: uppercase;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: auto;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.nav-scroller .nav-link {
  font-size: 12px;;
}

.nav-scroller a {
  font-size: 12px;
  padding-left: 35px;
  padding-right: 35px;
  color: #7ba0ad;
}

.nav-scroller a:hover {
  color: #a0ddf3;
  text-decoration: none;
}

.nav-scroller a span {
  padding-top: 10px;
  margin-top: 20px;
}
`;
