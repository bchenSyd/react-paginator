import React from "react";
import Paginator from "./paginator";

export default { component: Paginator, title: "Examples / Paginator" };

export const Basic = () => <Paginator />;
export const WithArgs = (args) => <Paginator {...args} />;
WithArgs.args = { para: "Some parameters" };

