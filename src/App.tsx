import { CardBody, Typography, Button } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

import React from "react";
import RichText from "./RichTextEditor";

const App: React.FC = () => {
    return (
        <div className=" w-[600px]">
            <div className="my-2 w-full">
                <CardBody className=" flex py-2 pr-2 p-2">
                    <IconButton
                        variant="text"
                        size="sm"
                        color="gray"
                        className=" w-full mr-1"
                    >
                        <DragIndicatorIcon />
                    </IconButton>

                    <Button
                        color="gray"
                        variant="text"
                        className=" flex flex-col px-1 h-full"
                    >
                        <Typography
                            color="blue-gray"
                            variant="paragraph"
                            className=" text-left font-normal leading-5"
                        >
                            文本测试, 文本测试, 文本测试, 文本测试, 文本测试,
                            文本测试, 文本测试, 文本测试, 文本测试, 文本测试,
                            文本测试, 文本测试, 文本测试, 文本测试, 文本测试,
                            文本测试, 文本测试, 文本测试
                        </Typography>
                    </Button>
                </CardBody>
            </div>

            <RichText />

            <div className="my-2 w-full">
                <CardBody className=" flex py-2 pr-2 p-2">
                    <IconButton
                        variant="text"
                        size="sm"
                        color="gray"
                        className=" w-full mr-1"
                    >
                        <DragIndicatorIcon />
                    </IconButton>

                    <Button
                        color="gray"
                        variant="text"
                        className=" flex flex-col px-1 h-full"
                    >
                        <Typography
                            color="blue-gray"
                            variant="paragraph"
                            className=" text-left font-normal leading-5"
                        >
                            文本测试, 文本测试, 文本测试, 文本测试, 文本测试,
                            文本测试, 文本测试, 文本测试, 文本测试, 文本测试,
                            文本测试, 文本测试, 文本测试, 文本测试, 文本测试,
                            文本测试, 文本测试, 文本测试
                        </Typography>
                    </Button>
                </CardBody>
            </div>

            <div className="my-2 w-full">
                <CardBody className=" flex items-center py-2 pr-2 p-2 cursor-text w-full h-full">
                    <IconButton
                        variant="text"
                        size="sm"
                        color="gray"
                        className=" w-20 mr-1"
                    >
                        <DragIndicatorIcon />
                    </IconButton>
                    <Button
                        color="gray"
                        variant="text"
                        className=" flex flex-col px-1 h-full"
                    >
                        <Typography color="blue-gray" variant="h4">
                            标题测试
                        </Typography>
                    </Button>
                </CardBody>
            </div>
        </div>
    );
};

export default App;
