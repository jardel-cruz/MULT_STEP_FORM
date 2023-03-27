import Card from "../../components/Card/Card";
import Text from "../../components/Text/Text";
import Title from "../../components/Title/Title";
import { EndStyle, ThankYou } from "./End_style";

export default function End() {
  return (
    <Card>
      <EndStyle>
        <ThankYou></ThankYou>
        <Title>Thank You!</Title>
        <Text>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremGaming.com.
        </Text>
      </EndStyle>
    </Card>
  );
}
