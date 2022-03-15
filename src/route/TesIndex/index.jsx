import React, { useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../../component/Button';
import Input from '../../component/Input';
import PhoneInput from '../../component/Input/PhoneInput';
import Toast from '../../component/Toast';
import Card from '../../component/Card';
import Label from '../../component/Label';
import { Span, Paragraph } from '../../component/Typography';

// redux
import { setFlash, setSubmit } from '../../redux/actions';

// assets
import BannerImg from './assets/banner.png';
import Clock from './assets/clock.svg';
import InstagramIcon from './assets/instagram.svg';

import './styles.scss';
import { useEffect } from 'react';

function TesIndex() {
  const [nameTxt, setNameTxt] = useState('');
  const [passTxt, setPassTxt] = useState('');
  const [phoneTxt, setPhoneTxt] = useState('');
  const dispatch = useDispatch();
  const flash = useSelector((state) => state.app.flash);
  const canSubmit = useSelector((state) => state.app.canSubmit);
  const error = useSelector((state) => state.app.errorMessage);

  // Props
  const handleChangeName = (e) => {
    const { target } = e;
    setNameTxt(target.value);
  };

  const handleChangePass = (e) => {
    const { target } = e;
    setPassTxt(target.value);
  };

  const handleChangePhone = (e) => {
    const { target } = e;
    setPhoneTxt(target.value);
  };

  const handleSubmit = () => {
    console.log("nameTxt && passTxt && phoneTxt && canSubmit",nameTxt && passTxt && phoneTxt && canSubmit);
    if (nameTxt && passTxt && phoneTxt && canSubmit) {
      dispatch(setFlash('success', 'Data berhasil disimpan', true));
    }
  };

  useEffect(() => {
    if (nameTxt && passTxt && phoneTxt && !error) {
      dispatch(setSubmit(true));
    }
  }, [error]);

  return (
    <div className="tes-index">
      <div className="banner">
        <Card headerImage={BannerImg} padding="medium">
          <Fragment>
            <div className="card-description">
              <Label regular>
                <Span bold="true" spacing={2} small="true">
                  PENTING
                </Span>
              </Label>
              <div>
                <Paragraph bold="true">Jasa Perancangan Website e-Commerce</Paragraph>
                <Paragraph>
                  <Span>mulai dari</Span>
                  <Span strikethrough="true"> Rp6.000.000</Span>
                  <Span alert="true" bold="true">
                    Rp1.000.000
                  </Span>
                </Paragraph>
              </div>
            </div>
            <div className="card-detail">
              <div className="left">
                <img src={Clock} />
                <Span medium="true">31 Desember 2022</Span>
              </div>
              <div className="right">
                <img src={InstagramIcon} />
              </div>
            </div>
          </Fragment>
        </Card>
      </div>
      <div className="form">
        <Input
          label="John Doe"
          title="Nama Lengkap"
          maxLength={40}
          value={nameTxt}
          validate={['maxLength']}
          onChange={handleChangeName}
        />
        <PhoneInput
          label="81908009190"
          title="Nomor Telepon"
          value={phoneTxt}
          onChange={handleChangePhone}
          validate={['phoneNumber']}
          description="Pilih kode negara, diikuti dengan nomor HPmu"
        />
        <Input
          label="Masukkan kata sandi"
          title="Kata Sandi"
          maxLength={16}
          value={passTxt}
          onChange={handleChangePass}
          validate={['passwordFormat', 'lengthBetween']}
          description="Kata sandi harus mengandung 8-16 karakter kombinasi huruf besar, huruf kecil, dan angka"
          password
        />
        <div className="btn-section">
          <Button ghost={!canSubmit} onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
      <Toast message={flash.text} open={flash.show} timeout={3000} />
    </div>
  );
}

export default TesIndex;
