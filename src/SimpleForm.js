import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DatePicker from './datePicker';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MaskedInput from 'react-text-mask'





const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting   } = props;

    
  
  return (  
   
  
    <form onSubmit={handleSubmit}> 
     <Divider variant="middle" />
    <br></br>
    <div>
    <Grid container spacing={24}>
      <Grid item xs={2} >
        <label className="LabelTitle">IBAN:  &nbsp;&nbsp;</label>
        </Grid>
      <Grid item xs={2} sm={4}>
        <div id="iban">
        
             <MaskedInput
             mask={['T', 'R', /\d/,/\d/, ' ', /\d/, /\d/, /\d/, /\d/,/\d/,' ', /\d/, ' ',/\d/, /\d/, /\d/,/\d/, /\d/, /\d/, /\d/,/\d/,/\d/, /\d/, /\d/,/\d/, /\d/, /\d/, /\d/,/\d/]}
             className="inputForm"
             name="IBAN:"
             guide={false}
             component="input"
             type="text"
             id="my-input-id"
             onBlur={() => {}}
             onChange={() => {}}
             value="TR"
            
           />
          </div>
          </Grid>
         </Grid>    
      </div>
      &nbsp;
      <div>
 
      <Grid container spacing={12}>
      <Grid item xs={2} >
            <label className="LabelTitle">Alıcının Adı Soyadı:  &nbsp;&nbsp;</label>
      </Grid>
      <Grid item xs={2} sm={4}>
        <div> 
          <Field
          className="inputForm"
            name="alici"
            component="input"
            type="text"/>
         </div>
         </Grid>
         </Grid>    
        
     
      </div>
      &nbsp;
      <div>
      <Grid container spacing={12}>
      <Grid item xs={2} >
      <label className="LabelTitle">Alıcı TC Kimlik No/Vergi No:  &nbsp;&nbsp;</label>
      </Grid>
      <Grid item xs={2} sm={4}>
        <div>
          <Field
          className="inputForm"
            name="Alıcı TC Kimlik No/Vergi No:"
            component="input"
            type="text"
          
          />
         </div>
         </Grid>
         </Grid>   
      </div>
      &nbsp;
      <div>
      <Grid container spacing={12}>
      <Grid item xs={2} >
        <label className="LabelTitle">Ödeme Türü:</label>
        </Grid>
      <Grid item xs={2} sm={4}>
        <div>
          <Field 
          className="inputForm" 
          name="Ödeme Türü:"
         component="select" 
         
    >
         
            <option selected>Lütfen Ödeme Tipini Seçiniz</option>
            <option value="E-ticaretÖdemesi">E-ticaret Ödemesi</option>
            <option value="DiğerÖdemeler">Diğer Ödemeler</option>
            <option value="KonutKirası">Konut Kirası</option>
            <option value="İşyeriKirası">İşyeri Kirası</option>
            <option value="DiğerKiralar">Diğer Kiralar</option>
          </Field>
        </div>
        </Grid>
         </Grid>  
      </div>
      &nbsp;
      <div>
      <Grid container spacing={12}>
      <Grid item xs={2} >
        <label className="LabelTitle">Gönderenin Telefonu:  &nbsp;&nbsp;</label>
        </Grid>
      <Grid item xs={2} sm={4}>
        <div>
          <Field
          className="inputForm"
            name="GöndereninTelefonu:"
            component="input"
            type="text" />
          </div>
          </Grid>
         </Grid>  
      </div>
      &nbsp;
      <div>
      <Grid container spacing={12}>
      <Grid item xs={2} >
        <label className="LabelTitle">Açıklama:  &nbsp;&nbsp;</label>
        </Grid>
      <Grid item xs={2} sm={4}>
        <div>
          <Field
          className="inputForm"
            name="Açıklama:"
            component="input"
            type="text"/>
          </div>
            </Grid>
         </Grid>  
      </div>
      &nbsp;
      <div>
      <Grid container spacing={12}>
        <Grid item xs={2}>
        <label className="LabelTitle">E-Posta İle Bildir:</label>
        </Grid>
        <Grid item xs={1} sm={1}>
        <div>
             <Field
             className="h2"
            name="email"
            id="email"
            component="input"
            type="checkbox" />   
            </div>
            </Grid>
        <Grid item xs={1} sm={8}>
          <div>
            <Field
           className="twist"
            id="email"
            name="email"
            component="input"
            type="email"
            placeholder="Email"/>   
          </div>
          </Grid>
      </Grid>
          </div>
      &nbsp;
      &nbsp;
      <div>
      <Grid container spacing={12}>
        <Grid item xs={2}>
        <label className="LabelTitle">Alıcıya E-Posta İle Bildir:</label>
        </Grid>
        <Grid item xs={1} sm={1}>
        <div>
             <Field
             className="h2"
            name="email"
            id="email"
            component="input"
            type="checkbox" />   
            </div>
            </Grid>
        <Grid item xs={1} sm={8}>
          <div>
            <Field
           className="twist"
            id="email"
            name="email"
            component="input"
            type="email"
            placeholder="Email"/>   
          </div>
          </Grid>
      </Grid>
          </div>
      &nbsp;
      <div >
       <Toolbar className="deneme">
          <Typography  >
          Transfer Tarih ve Tutar Bilgileri
          </Typography>
        </Toolbar>
   
    </div>
    &nbsp;
      <div>
      <Grid container spacing={12}>
        <Grid item xs={2}>
        <label className="LabelTitle">Transfer Edilecek Tutar:  &nbsp;&nbsp;</label>
        </Grid>
        <Grid item xs={1} sm={1}>
        <div>
          <Field
          className="inputForm"
            name="TransferEdilecekTutar:"
            component="input"
            type="text"
           
          />
          </div>
          </Grid>
      </Grid>
      </div>
<DatePicker/>
&nbsp;
      <div>
    
        <Toolbar className="deneme" >
          <Typography  >
       Uyarı
          </Typography>
          
        </Toolbar>
        <p className="span">* İsme EFT işlemlerinizde Alıcı Adı Soyadı alanı en fazla boşluklar dahil 39 karakterden oluşmalıdır.
             39 karakterden fazla yapılan girişler bir sonraki ekranda otomatik olarak 39 karaktere düşürülecektir.</p>
   
    </div>
    &nbsp;
    <div>
    <Button variant="contained" href="#contained-buttons" >
        Devam
      </Button>
      &nbsp;&nbsp;
      <Button variant="contained" href="#contained-buttons" className="color">
        Geri
      </Button>
      </div>

    </form>
  );
};


export default reduxForm({
  form: 'simple', // a unique identifier for this form
 
})(SimpleForm);
