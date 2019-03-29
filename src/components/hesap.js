import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  SelectionState,
  IntegratedSelection,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableSelection,
} from '@devexpress/dx-react-grid-material-ui';
import './index.scss';
import TableCell from '@material-ui/core/TableCell'
import Divider from '@material-ui/core/Divider';


const data=[
   
  { name: 'Vadesiz',sube: 'Bağlarbadşı/istanbul', iban: 'TR1234567894564213', bakiye: 67.00 },
  { name: 'Vadesiz',sube: 'Bağlarbaşı/istanbul', iban: 'TR1234567894564213', bakiye: 67.00 },
  { name: 'Vadesiz',sube: 'Bağlarbaşı/istanbul', iban: 'TR1234567894564213', bakiye: 67.00 },
  { name: 'Vadesiz',sube: 'Bağlarbaşı/istanbul', iban: 'TR1234567894564213', bakiye: 67.00 },
  { name: 'Vadesiz',sube: 'Bağlarbaşı/istanbul', iban: 'TR1234567894564213', bakiye: 67.00 },
  { name: 'Vadesiz',sube: 'Bağlarbaşı/istanbul', iban: 'TR1234567894564213', bakiye: 67.00 },


]


export default class Demo extends React.PureComponent {
  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  constructor(props) {
    super(props);
    
    this.state = {
     columns: [
        { id: 'name' ,name: 'name', title: 'Hesap Tipi' },
        { id: 'sube', name: 'sube', title: 'Şube' },
        { id: 'iban', name: 'iban', title: 'İban' },
        { id: 'bakiye', name: 'bakiye', title: 'Bakiye' },
      ],
      rows: data,
      selection: [],
    };
  
 
    this.changeSelection = selection => this.setState({ selection });
  }

  render() {
    const { rows, columns, selection ,classes } = this.state;
    const Cell = (props) => {
          return (
            <TableCell>
            <input type="radio" className="inputStyle" name="myGroupName" onChange={this.handleChange}>{this.props.myValue}</input>   
            </TableCell>
          )
        };

    return (
    
        <Paper  className="root">
         
          <div className="span">
          <p> Paranın çekileceği hesaplar</p>
         
          </div>
       
          <Grid
            
            rows={rows}
            columns={columns}
            className="table"
          >
            <SelectionState
              selection={selection}
              onSelectionChange={this.changeSelection}
            /> 
            <IntegratedSelection />
            <Table/>
            <TableHeaderRow
        
            />
            <TableSelection
              cellComponent={Cell}
        
           />
            <Divider variant="middle" />
          </Grid>
         
        </Paper>
        
    ); 

  }
}
