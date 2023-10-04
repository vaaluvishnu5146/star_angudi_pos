import {
  Button,
  ListGroup,
  ListGroupItem,
  Popover,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover,
} from "reactstrap";
import ICONS from "../../Assets/icons";
import MessageContainer from "../MessageContainer/MessageContainer";

export interface OptionT {
  id: number;
  label: string;
  callback: (id: Number, type: String) => void;
}

type AppProps = {
  data: any[];
  headings: string[];
  options: OptionT[];
};

export default function BasicTable({
  headings = [],
  data = [],
  options,
}: AppProps) {
  return (
    <>
      {data.length > 0 ? (
        <table className="table table-hover">
          <thead>
            <tr>
              {headings.map((h, i) => (
                <th scope="col" key={`${h}-${i}`}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={`${i}`}>
                <th scope="row">{d._id}</th>
                <td>{d.name}</td>
                <td>{d.createdAt}</td>
                <td>{d.updatedAt}</td>
                <td>
                  <Button
                    color="link"
                    id={`PopoverLegacy-${d.id}`}
                    type="button"
                  >
                    <ICONS.MENU
                      style={{
                        fontSize: "1.2rem",
                      }}
                    />
                  </Button>
                  <UncontrolledPopover
                    placement="right"
                    target={`PopoverLegacy-${d.id}`}
                    trigger="legacy"
                  >
                    <PopoverBody
                      style={{
                        padding: 0,
                      }}
                    >
                      <ListGroup>
                        {options &&
                          options.map((o, i) => (
                            <ListGroupItem
                              key={`${i}-${o.label}-option`}
                              action
                              tag="button"
                              onClick={() => o.callback(d._id, o.label)}
                            >
                              {o.label}
                            </ListGroupItem>
                          ))}
                      </ListGroup>
                    </PopoverBody>
                  </UncontrolledPopover>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <MessageContainer
          uri="https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-512x249-ju1c9yxg.png"
          message="No Data Found"
        />
      )}
    </>
  );
}
