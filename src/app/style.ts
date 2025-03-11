import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  landingContainer: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
  `,
  header: css`
    margin-bottom: 30px;
  `,
  features: css`
    max-width: 800px;
    margin: 40px 0;
    text-align: left;
  `,
  trainerFeatures: css`
    margin-bottom: 30px;
  `,
  clientFeatures: css`
    margin-bottom: 30px;
  `,
  buttonsSection: css`
  width: 100%;
  max-width: 500px`
});
