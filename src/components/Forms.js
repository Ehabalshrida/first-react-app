import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import datar from './data.json'
class Forms extends Component {
filters=(event)=> {
    let NumOfHonrns = parseInt(event.target.value);
    if(NumOfHonrns===0){
       let data=datar;
    this.props.filterData(data);

    }
            if(NumOfHonrns){
              let  data=[];
            datar.filter((item) =>{ 
                if(NumOfHonrns===item.horns){
                data.push(item);}
                         });

            this.props.filterData(data);

             } }

//
    render() {
        return (
            <>
                <Form >
                    <Form.Select aria-label="Default select example" onChange={(event)=>{this.filters(event)}}>
                        <option>filter the results based on number of horns </option>
                        <option value="1">One horn</option>
                        <option value="2">Two horns</option>
                        <option value="3">Three horns</option>
                        <option value="100">One handred horns</option>
                        <option value="0">All </option>

                    </Form.Select>
                    </Form>
            </>
        )
    }
}

export default Forms