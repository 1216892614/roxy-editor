import { Button } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Tabs, TabsHeader, Tab } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import Divider from "@mui/material/Divider";

import TextDecreaseOutlinedIcon from "@mui/icons-material/TextDecreaseOutlined";
import TextIncreaseOutlinedIcon from "@mui/icons-material/TextIncreaseOutlined";
import FormatAlignLeftOutlinedIcon from "@mui/icons-material/FormatAlignLeftOutlined";
import FormatAlignCenterOutlinedIcon from "@mui/icons-material/FormatAlignCenterOutlined";
import FormatAlignJustifyOutlinedIcon from "@mui/icons-material/FormatAlignJustifyOutlined";
import FormatAlignRightOutlinedIcon from "@mui/icons-material/FormatAlignRightOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatUnderlinedOutlinedIcon from "@mui/icons-material/FormatUnderlinedOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import FormatBoldOutlinedIcon from "@mui/icons-material/FormatBoldOutlined";
import InsertLinkIcon from "@mui/icons-material/InsertLink";

import InventoryIcon from "@mui/icons-material/Inventory";

import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";

const ToolKit: React.FC = () => {
    return (
        <>
            <div className=" flex flex-row items-center justify-between">
                <IconButton
                    variant="text"
                    size="sm"
                    color="gray"
                    className=" w-20"
                >
                    <DragIndicatorIcon />
                </IconButton>

                <IconButton
                    variant="text"
                    color="red"
                    size="md"
                    className=" w-20"
                >
                    <DeleteOutlineOutlinedIcon fontSize="medium" />
                </IconButton>

                <Tabs value="文本">
                    <TabsHeader>
                        <Tab key={"文本"} value={"文本"}>
                            文本
                        </Tab>
                        <Tab key={"表格"} value={"表格"}>
                            表格
                        </Tab>
                        <Tab key={"图片"} value={"图片"}>
                            图片
                        </Tab>
                        <Tab key={"引用"} value={"引用"}>
                            引用
                        </Tab>
                        <Tab key={"组件"} value={"组件"}>
                            组件
                        </Tab>
                    </TabsHeader>
                </Tabs>

                <div>
                    <Select label="文本样式">
                        <Option>段落</Option>
                        <Option>H1</Option>
                        <Option>H2</Option>
                        <Option>H3</Option>
                        <Option>H4</Option>
                        <Option>H5</Option>
                    </Select>
                </div>
            </div>

            <div className=" flex flex-row items-center justify-between">
                <div className=" flex flex-row items-center justify-around p-1 mt-2 bg-gray-200 dark:bg-gray-600 rounded">
                    <IconButton variant="text" color="gray" size="sm">
                        <TextIncreaseOutlinedIcon />
                    </IconButton>

                    <Menu>
                        <MenuHandler>
                            <Button
                                variant="text"
                                size="sm"
                                className=" text-md p-1 mx-1"
                            >
                                12
                            </Button>
                        </MenuHandler>
                        <MenuList className="max-h-72">
                            {[...Array(20).keys()].map((n) => (
                                <MenuItem key={n}>{n}</MenuItem>
                            ))}
                        </MenuList>
                    </Menu>

                    <IconButton variant="text" color="gray" size="sm">
                        <TextDecreaseOutlinedIcon />
                    </IconButton>

                    <Divider
                        className=" !mx-1"
                        orientation="vertical"
                        variant="middle"
                        flexItem
                    />

                    <IconButton variant="text" color="gray" size="sm">
                        <FormatBoldOutlinedIcon />
                    </IconButton>

                    <IconButton variant="text" color="gray" size="sm">
                        <FormatUnderlinedOutlinedIcon />
                    </IconButton>

                    <IconButton variant="text" color="gray" size="sm">
                        <InsertLinkIcon />
                    </IconButton>

                    <Menu>
                        <MenuHandler>
                            <Button
                                variant="text"
                                size="sm"
                                className=" text-md p-1 mx-1"
                                color="gray"
                            >
                                <InventoryIcon className="text-red-300" />
                            </Button>
                        </MenuHandler>
                        <MenuList className="max-h-72">
                            <MenuItem className="text-red-300">Red</MenuItem>
                            <MenuItem className="text-green-300">
                                Green
                            </MenuItem>
                            <MenuItem className="text-blue-300">Blue</MenuItem>
                            <MenuItem className="text-yellow-500">
                                Yellow
                            </MenuItem>
                            <MenuItem className="text-gray-600">Gray</MenuItem>
                        </MenuList>
                    </Menu>
                </div>

                <div className=" flex flex-row items-center justify-around p-1 mt-2 bg-gray-200 dark:bg-gray-600 rounded">
                    <IconButton variant="text" color="gray" size="sm">
                        <FormatAlignLeftOutlinedIcon />
                    </IconButton>
                    <IconButton variant="text" color="gray" size="sm">
                        <FormatAlignCenterOutlinedIcon />
                    </IconButton>
                    <IconButton variant="text" color="gray" size="sm">
                        <FormatAlignJustifyOutlinedIcon />
                    </IconButton>
                    <IconButton variant="text" color="gray" size="sm">
                        <FormatAlignRightOutlinedIcon />
                    </IconButton>
                </div>

                <div className=" flex flex-row items-center justify-around p-1 mt-2 bg-gray-200 dark:bg-gray-600 rounded">
                    <IconButton variant="text" color="gray" size="sm">
                        <FormatListNumberedIcon />
                    </IconButton>

                    <IconButton variant="text" color="gray" size="sm">
                        <FormatListBulletedOutlinedIcon />
                    </IconButton>

                    <IconButton variant="text" color="gray" size="sm">
                        <CheckBoxOutlinedIcon />
                    </IconButton>
                </div>
            </div>
        </>
    );
};

export default ToolKit;
