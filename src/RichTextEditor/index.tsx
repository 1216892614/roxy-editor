import { Card, CardBody } from "@material-tailwind/react";
import Input from "./Input";
import ToolKit from "./ToolKit";

const RichText: React.FC = () => {
    return (
        <>
            <Card className="mt-3 mb-1 w-full rounded-b-none">
                <CardBody className=" p-2">
                    <ToolKit />
                </CardBody>
            </Card>

            <Card className="mb-3 w-full rounded-t-none hover:shadow-lg">
                <CardBody className="p-1">
                    <Input modifiers={[]} />
                </CardBody>
            </Card>
        </>
    );
};

export default RichText;
