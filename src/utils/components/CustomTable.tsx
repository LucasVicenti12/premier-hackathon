import {
  Typography,
  Sheet,
  Table
} from '@mui/joy';

export function CustomTable() {
  return (
    <div>
      <Sheet sx={{ height: 300, overflow: 'auto', width: 1200}}>
        <Table
          aria-label="table with sticky header"
          stickyHeader
          stickyFooter
          stripe="odd"
          hoverRow
        >
          <thead>
            <tr>
              <th>Row</th>
              <th>Calories</th>
              <th>Fat&nbsp;(g)</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>teste</td>
                <td>teste</td>
                <td>teste</td>
              </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>{1}</td>
              <td>{2}</td>
              <td>{3}</td>
            </tr>
          </tfoot>
        </Table>
      </Sheet>
    </div>
  );
}
