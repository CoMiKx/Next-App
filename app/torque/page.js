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
        <Table.Column>Bolt</Table.Column>
        <Table.Column>Torque</Table.Column>
        <Table.Column>STATUS</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row key="1">
          <Table.Cell>MK</Table.Cell>
          <Table.Cell>SUKII</Table.Cell>
          <Table.Cell>Active</Table.Cell>
        </Table.Row>
        <Table.Row key="2">
          <Table.Cell>M8</Table.Cell>
          <Table.Cell>12.5 n/m</Table.Cell>
          <Table.Cell>vbvb</Table.Cell>
        </Table.Row>
        <Table.Row key="3">
          <Table.Cell>M8</Table.Cell>
          <Table.Cell>12.5 n/m</Table.Cell>
          <Table.Cell>vbvb</Table.Cell>
        </Table.Row>
        <Table.Row key="4">
          <Table.Cell>M8</Table.Cell>
          <Table.Cell>12.5 n/m</Table.Cell>
          <Table.Cell>vbvb</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
