import { useEffect } from "react";
import { FaComment, FaTimes } from "react-icons/fa";
import { Drawer, Form, Input, message } from "antd";

import { Button, FlexRow, FlexCol, Span } from "Components/Shared";
import { useModal } from "hooks";
import { sendMessageToTelegram } from "helpers";
import { DefaultColors } from "consts";

import { commentsValidationRules } from "./validationRules";

interface CommentFormValues {
  nick?: string;
  comment?: string;
}

export default function Comments() {
  const [sidebarVisible, toggleSidebar] = useModal(false);
  const [form] = Form.useForm<CommentFormValues>();

  const onClose = () => {
    toggleSidebar();
    form.resetFields();
  };

  const onFinish = (values: CommentFormValues) => {
    const preparedModel = {
      nick: values.nick ?? "Anonymous",
      comment: values.comment as string,
    };

    sendMessageToTelegram(preparedModel)
      .then(() => {
        message.info(
          "You send your comment, tnx \n You can check this in special Caesar channel. \n If u don't know the link, click on telegram icon in right part of header"
        );
        onClose();
      })
      .catch(() => message.error("Something was wrong. Please try later"));
  };

  useEffect(() => {
    if (!sidebarVisible) {
      form.resetFields();
    }
  }, [sidebarVisible, form]);

  return (
    <FlexRow position="absolute" right="20px" bottom="20px" width="auto">
      <Button
        display="flex"
        alignItems="center"
        gap="5px"
        type="primary"
        width="auto"
        onClick={toggleSidebar}
        icon={<FaComment />}
      >
        <Span>Add your comment to my special telegram channel</Span>
      </Button>
      <Drawer open={sidebarVisible} onClose={onClose} closable={false}>
        <FlexCol height="100%">
          <FlexCol
            justifyContent="flex-start"
            alignItems="flex-start"
            gap="25px"
          >
            <FlexRow alignItems="center">
              <Span
                fontSize="20px"
                fontWeight="bold"
                color={DefaultColors.BLUE}
              >
                Add comment
              </Span>
              <Button
                type="ghost"
                width="auto"
                onClick={onClose}
                icon={<FaTimes color={DefaultColors.RED} />}
              />
            </FlexRow>
            <Form
              style={{ width: "100%" }}
              form={form}
              name="comment-form"
              layout="vertical"
              onFinish={onFinish}
            >
              <Form.Item name="nick" label="Your nick">
                <Input size="large" />
              </Form.Item>
              <Form.Item
                name="comment"
                label="Your comment"
                rules={commentsValidationRules.comment}
              >
                <Input.TextArea size="large" />
              </Form.Item>
            </Form>
          </FlexCol>
          <FlexRow gap="5px" alignItems="center">
            <Button
              type="primary"
              width="auto"
              size="large"
              form="comment-form"
              htmlType="submit"
              display="flex"
              alignItems="center"
              gap="5px"
              icon={<FaComment />}
            >
              Add comment
            </Button>
            <Button
              onClick={onClose}
              width="auto"
              color="white"
              display="flex"
              gap="5px"
              alignItems="center"
              hoverColor="white"
              background={DefaultColors.RED}
              size="small"
              height="30px"
              icon={<FaTimes color="white" />}
            >
              Cancel
            </Button>
          </FlexRow>
        </FlexCol>
      </Drawer>
    </FlexRow>
  );
}
