import { css } from '@emotion/react';
import { GrafanaTheme2 } from '@grafana/data';

export const getStyles = (theme: GrafanaTheme2) => {
  return css`
    /**
         * Any CSS included here will be global. The classic template
         * bundles Infima by default. Infima is a CSS framework designed to
         * work well for content-centric websites.
         */
    :root {
      --doc-sidebar-width: 220px !important;
    }

    [data-theme='dark'] {
      --ifm-color-primary: #fff;
    }

    .navbar__item {
      margin-top: 7px;
    }

    #pageTemplate {
      font-size: 20px;
    }

    .theme-doc-markdown a {
      /* Doc pages main section without edit this page or pagination */
      color: ${theme.colors.primary.main};
      text-decoration: underline;
    }

    .theme-doc-markdown a:hover {
      text-decoration: none;
    }

    .header-links {
      font-size: ${theme.typography.fontSize}px;
      cursor: pointer;
      flex-grow: 1;
      text-align: right;
    }

    .markdown h1:first-of-type {
      display: flex;
      align-items: center;
      gap: ${theme.spacing(2)};
    }

    /* NAVIGATION */

    .menu,
    .navbar {
      background-color: ${theme.colors.background.primary};
    }

    .menu__link--sublist-caret:after {
      background: var(--ifm-menu-link-sublist-icon) 50% / 1rem 2rem;
    }

    .menu__link,
    .table-of-contents__link {
      color: ${theme.colors.text.secondary};
      font-size: 14px;
      line-height: 21px;
      font-weight: 400;
    }

    .menu__link.menu__link--active {
      color: #ccccdc;
      background: none;
    }

    .theme-doc-sidebar-item-link-level-1 > .menu__link--active::before,
    .menu__list-item-collapsible > .menu__link--active::before {
      content: '';
      height: 29px;
      width: ${theme.spacing(0.5)};
      background: ${theme.colors.gradients.brandVertical};
      position: absolute;
      border-radius: ${theme.shape.borderRadius()};
      left: 0px;
    }

    .menu__link:hover,
    .menu__list-item-collapsible:hover {
      color: #ccccdc;
      background: ${theme.colors.background.secondary};
      text-decoration: underline;
    }

    .table-of-contents__link:hover {
      color: #ccccdc;
      text-decoration: underline;
    }

    .table-of-contents {
      padding-left: ${theme.spacing(3)};
    }

    .table-of-contents::before {
      content: 'On this page';
      color: rgba(204, 204, 220, 0.65);
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
    }

    .table-of-contents ul {
      padding: 0;
    }

    .table-of-contents li {
      margin: 0;
    }

    .table-of-contents li:first-of-type {
      margin-top: 2px;
    }

    .table-of-contents__link {
      border-left: 2px solid ${theme.colors.border.weak};
      min-height: 29px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .table-of-contents__link--active::before {
      content: '';
      height: 29px;
      width: ${theme.spacing(0.5)};
      background: ${theme.colors.gradients.brandVertical};
      position: absolute;
      border-radius: ${theme.shape.borderRadius()};
      left: ${theme.spacing(3)};
    }

    .table-of-contents__link--active {
      color: #ccccdc;
    }

    .table-of-contents > li > .table-of-contents__link {
      padding-left: 8px;
    }

    .table-of-contents > li li > .table-of-contents__link {
      padding-left: ${theme.spacing(3)};
    }

    .pagination-nav a:hover {
      text-decoration: none;
    }

    .pagination-nav button {
      width: 215px;
    }

    .pagination-nav button span {
      text-align: center;
      width: 100%;
      display: block !important;
    }

    main {
      background: ${theme.colors.background.canvas};
      color: ${theme.colors.text.primary};
    }

    /* ABOUT */

    #about #content {
      padding: 35px;
      font-size: 15px;
    }

    #about #content h1 {
      font-weight: 400;
    }

    #about #content #cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: ${theme.spacing(7.5)} 0;
    }

    #about .card,
    #about #content #box {
      background: ${theme.colors.background.primary};
      border: 1px solid ${theme.colors.border.weak};
    }

    #about #content #cards .card {
      width: 21%;
      padding: 24px;
      border-radius: 2px;
      display: block;
    }

    #about #content #cards .card img {
      float: left;
      width: 18px;
    }

    #about #content #cards .card .title {
      float: left;
      font-size: 16px;
      margin: -5px 0 0 10px;
    }

    #about #content #cards .card .text {
      float: left;
      line-height: 20px;
      margin: 5px 0 0 0;
    }

    #about #content #cards-large {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 10px 0 0 0;
    }

    #about #content #cards-large .card {
      width: 46%;
      padding: 25px;
      border-radius: ${theme.shape.borderRadius()};
      display: block;
    }

    #about #content #cards-large .card .content {
      margin: -5px 0 0 70px;
    }

    #about #content #cards-large img {
      float: left;
      width: 45px;
    }

    #about #content #cards-large .card .title {
      font-size: 19px;
    }

    #about #content #cards-large .card .text {
      font-size: 14px;
      line-height: 20px;
      margin: 2px 0 30px 0;
    }

    #about #content #cards-large .card a {
      text-decoration: none;
    }

    #about #content #box {
      border-radius: ${theme.shape.borderRadius()};
      padding: ${theme.spacing(3)};
      margin: 0 0 ${theme.spacing(7.5)} 0;
    }

    #about #content #box .section {
      margin: 0 0 ${theme.spacing(5)} 0;
    }

    #about #content #box .section:nth-of-type(4) {
      margin: 0;
    }

    #about #content .footer {
      margin: ${theme.spacing(7.5)} 0 0 0 !important;
    }

    #about #content .footer a {
      text-decoration: none;
    }

    #footer {
      background: ${theme.colors.background.canvas};
      font-size: 15px;
      padding: ${theme.spacing(2.5)} 0;
      display: flex;
      justify-content: center;
    }

    #footer p,
    #footer a {
      color: #8e8e8e;
      float: left;
      margin: 0 ${theme.spacing(5)} 0 0;
    }

    .two-images-comparison {
      display: flex;
      flex-direction: row;
    }
    
    .two-images-comparison div:first-of-type {
      margin-right: 20px;
    }
    
    @media screen and (max-width: 520px) {
      .two-images-comparison {
        flex-direction: column;
      }
    
      .two-images-comparison div:first-of-type {
        margin-right: 0;
      }
    }
    
    .two-column-div {
      display: flex;
      flex-direction: row;
    }
    
    .two-column-div p:first-of-type {
      margin-right: 20px;
    }
    
    @media screen and (max-width: 520px) {
      .two-column-div {
        flex-direction: column;
      }
    
      .two-column-div p:first-of-type {
        margin-right: 0;
      }
    },
  `;
};
