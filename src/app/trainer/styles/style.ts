import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  layoutContainer: css`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: url("/path-to-your-background-image.jpg") no-repeat center
      center/cover;
    color: rgba(244, 208, 78, 0.7);
    text-align: center;
    position: relative;
    margin: 0;
    padding: 0;
  `,
  headerStyle: css`
    background: rgba(255, 255, 255, 0.8);
    padding: 16px;
    font-size: 20px;
    font-weight: bold;
    color: #1e1f52;
    position: relative;
    z-index: 1;
  `,
  footerStyle: css`
    text-align: center;
    background: rgba(255, 255, 255, 0.8);
    color: #1e1f52;
    padding: 16px;
  `,
});
