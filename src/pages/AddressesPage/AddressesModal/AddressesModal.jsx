import React, {useState} from 'react';
import s from "./AddressesModal.module.scss";
import closeIcon from "../../../assets/images/Modal/closeIcon.svg";
import ButtonModal from "../../../components/UI/button/ButtonModal";
import Input from "../../../components/UI/Input/Input";

const AddressesModal = (props) => {

    const [isLabel, setIsLabel] = useState(false);

    const handleChange = (event) => {
        if (event.target.value !== '') {
            setIsLabel(true);
        } else {
            setIsLabel(false);
        }
    };

    return (
        <div className={props.showModal ? `${s.modal__container} ${s.active}` : s.modal__container}>
            <div className={s.modal__container__content}>
                <div className={s.modal__container__content__body}>
                    <div className={s.modal__title__container}>
                        <h2 className={s.modal__title}>Добавить адрес</h2>
                        <img className={s.modal__img} onClick={() => props.handleModal(false)} src={closeIcon} alt=""/>
                    </div>

                    <div className={s.switch}>
                        <div className={s.switch__delivery}>
                            <p className={s.paragraph__delivery}>Адресная доставка</p>
                        </div>
                        <div className={s.switch__post}>
                            <p className={s.paragraph__post}>Постомат</p>
                        </div>
                    </div>

                    <div className={s.modal__paragraph__container}>
                        <p className={s.modal__paragraph}>Введите адрес для доставки</p>
                    </div>
                    <div className={s.addresses__input__container}>
                        <div style={{marginTop: "15px"}}>
                            <Input className={s.addresses__input} label__focus="Название адреса" label="Название адреса"
                                   handleTextChange={handleChange}/>
                        </div>
                        <div style={{marginTop: "15px"}}>
                            <Input className={s.addresses__input} label__focus="Город" label="Ваш город"
                                   handleTextChange={handleChange}/>
                        </div>
                        <div style={{marginTop: "15px"}}>
                            <Input className={s.addresses__input} label__focus="Улица" label="Улица"
                                   handleTextChange={handleChange}/>
                        </div>
                        <div style={{display: "flex", marginTop: "15px"}}>
                            <Input className={s.addresses__home} label__focus="Дом" label="Номер дома"
                                   handleTextChange={handleChange}/>
                            <Input className={s.addresses__office} label__focus="Квартира / Офис" label="Номер офиса"
                                   handleTextChange={handleChange}/>
                        </div>
                        <div style={{marginTop: "15px"}}>
                            <Input className={s.addresses__input} label__focus="Комментарий"
                                   label="Комментарий к доставке" handleTextChange={handleChange}/>
                        </div>
                    </div>
                    <div>
                        <ButtonModal color={'btnBlue'}
                                     name="Добавить"
                                     handleModal={props.handleModal}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddressesModal;