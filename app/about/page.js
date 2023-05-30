"use client";
import { Table } from "@nextui-org/react";

export default function App() {
  return (
    <Table
      aria-label="Example static collection table with multiple selection"
      css={{
        height: "auto",
        minWidth: "100%",
        backgroundColor: "#dbeafe"
      }}
      selectionMode="multiple"
    >
      <Table.Header>
        <Table.Column>NAME</Table.Column>
        <Table.Column>ROLE</Table.Column>
        <Table.Column>STATUS</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row key="1">
          <Table.Cell>Baramee Sukhong</Table.Cell>
          <Table.Cell>CEO</Table.Cell>
          <Table.Cell>Active</Table.Cell>
        </Table.Row>
        <Table.Row key="2">
          <Table.Cell>P mai</Table.Cell>
          <Table.Cell>Sale</Table.Cell>
          <Table.Cell>Paused</Table.Cell>
        </Table.Row>
        <Table.Row key="3">
          <Table.Cell>P wong</Table.Cell>
          <Table.Cell>Comedian 1</Table.Cell>
          <Table.Cell>Active</Table.Cell>
        </Table.Row>
        <Table.Row key="4">
          <Table.Cell>P mook</Table.Cell>
          <Table.Cell>Comedian 2</Table.Cell>
          <Table.Cell>Vacation</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
