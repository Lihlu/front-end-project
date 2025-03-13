import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
    landingContainer: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0;
      margin: 0;
      min-height: 100vh;
      background: url('/landing_background.jpg') no-repeat center center/cover;
      color: #1e1f52;
      text-align: center;
      position: relative;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(244, 208, 78, 0.7);
        z-index: 0;
      }
    `,
    header: css`
      margin-bottom: 40px;
      position: relative;
      z-index: 1;
    `,
    button: css`
      background: #4e90f4;
      color: white;
      font-size: 18px;
      font-weight: bold;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
      &:hover {
        background: #1e1f52;
      }
    `,
    secondaryButton: css`
      background: #f4a62a;
      color: white;
      font-size: 18px;
      font-weight: bold;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
      &:hover {
        background: #c47c16;
      }
    `,
    loginForm: css`
      background: rgba(255, 255, 255, 0.9);
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
      max-width: 400px;
      width: 100%;
      position: relative;
      z-index: 1;
    `,
    loginButton: css`
      width: 100%;
      background: #4e90f4;
      color: white;
      font-size: 18px;
      font-weight: bold;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
      &:hover {
        background: #1e1f52;
      }
    `,
  });
