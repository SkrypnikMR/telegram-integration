import { FaTelegram } from "react-icons/fa";
import { Header, Span, Button } from "Components/Shared";
import { DefaultColors } from "consts";

import { Tooltip } from "antd";

export default function MainHeader() {
  const onTelegramClick = (link: string) => () => window.open(link, "_blank");

  return (
    <Header
      width="auto"
      background={DefaultColors.BLUE}
      color="white"
      height="5vh"
      display="flex"
      alignItems="center"
      padding="15px 15px"
    >
      <Tooltip color={DefaultColors.BLUE} title="Lin on my telegram">
        <Span
          cursor="pointer"
          width="auto"
          alignSelf="center"
          onClick={onTelegramClick("https://t.me/Skripnik2201")}
        >
          Skrypnik M.R
        </Span>
      </Tooltip>
      <Tooltip
        color={DefaultColors.BLUE}
        title="Link to Caesar Comments"
        placement="bottomRight"
      >
        <Button
          padding="0"
          margin="0"
          type="ghost"
          icon={<FaTelegram size="30px" />}
          width="auto"
          onClick={onTelegramClick("https://t.me/+lMO8V26s2CFkZDli")}
        />
      </Tooltip>
    </Header>
  );
}
