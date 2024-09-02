import dynamic from "next/dynamic";
import { Fragment } from "react";

const NoSsr = (props) => <Fragment>{props.children}</Fragment>;

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false,
});
