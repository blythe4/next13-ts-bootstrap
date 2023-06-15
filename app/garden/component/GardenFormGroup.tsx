import { Form, Row, Col } from "react-bootstrap";

interface CheckboxOption {
    label: string;
    value: string;
}

type FormGroupProps = {
    type: "checkbox" | "radio";
    label: string;
    name: string;
    options: CheckboxOption[];
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormGroupCheckbox = ({ type, label, name, options, onChange }: FormGroupProps) => {
    return (
        <Row xs="auto" className="align-items-center py-1">
            <Col xs={12} lg="auto">
                <Form.Label column="lg">{label}</Form.Label>
            </Col>
            {options.map((option) => (
                <Col key={option.value} xs="auto">
                    <Form.Check
                        type={type}
                        name={name}
                        id={option.value}
                        label={option.label}
                        value={option.value}
                        onChange={onChange}
                    />
                </Col>
            ))}
        </Row>
    );
};

export default FormGroupCheckbox;
