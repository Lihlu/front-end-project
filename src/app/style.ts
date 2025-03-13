import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  landingContainer: css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  min-height: 100vh;
  width: 100vw;
  background: url('/landing_background.jpg') no-repeat center center/cover;
  color: #1e1f52;
  text-align: center;
  position: relative;
  overflow: hidden; 
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(244, 208, 78, 0.7);
    z-index: -1; 
  }
`,
  header: css`
    margin-bottom: 40px;
    position: relative;
    z-index: 1;
  `,
  features: css`
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 600px;
    background: rgba(255, 255, 255, 0.7);
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
    position: relative;
    z-index: 1;
  `,
  trainerFeatures: css`
    padding: 15px;
    background: #4e90f4;
    border-radius: 8px;
    color: white;
  `,
  clientFeatures: css`
    padding: 15px;
    background: #f4a62a;
    border-radius: 8px;
    color: white;
  `,
  buttonsSection: css`
    margin-top: 30px;
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
    background: purple;
    color: white;
    font-size: 18px;
    font-weight: bold;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      background: #ffa500;
    }
  `,
});



