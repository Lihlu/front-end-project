"use client";

import React from "react";
import Head from "next/head";
import { Button, Space, Typography } from "antd";
import Link from "next/link";
import { useStyles } from "./style";

const {Title, Text} = Typography;

const LandingPage: React.FC = () => {
  const {styles} = useStyles();
  return (
    <>
      <Head>
        <title>Welcome to MyGym</title>
        <meta name="despcription" content="Start your journey with us today." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.landingContainer}>
        <header className={styles.header}>
          <Title level={1}>Welcome to MyGym!</Title>
          <Text>Start your journey with us today</Text>
        </header>
        <section className={styles.features}>
          <div className={styles.trainerFeatures}>
            <Title level={3}>For Trainers</Title>
            <Text>
              Create, manage, and customize your clients' meal plans with ease.
              You can also track food items and ensure your clients are
              following the best nutrition plan tailored to their needs.
            </Text>
          </div>
          <div className={styles.clientFeatures}>
            <Title level={3}>For Clients</Title>
            <Text>
              View the meal plans created just for you by your trainer. Stay on
              top of your goals and make healthier choices with your
              personalised nutrition plan.
            </Text>
          </div>
        </section>
        <section className={styles.buttonsSection}>
          <Space direction="vertical" size="large">
            <Link href="">
              <Button type="primary" size="large" block>
                Sign Up Now
              </Button>
            </Link>
            <Link href="">
              <Button type="primary" size="large" block>
                Already have an account? Log In
              </Button>
            </Link>
          </Space>
        </section>
      </div>
    </>
  );
};

export default LandingPage;
