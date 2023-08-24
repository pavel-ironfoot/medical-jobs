import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { ModalOffer } from '../ModalOffer';
import { useState } from 'react';

import './OfferForm.scss';

type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
};

export const OfferForm = () => {
    const [active, setActive] = useState<boolean>(false);
    const { t, i18n } = useTranslation();

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm<FormData>({
        mode: "onChange"
    });

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(JSON.stringify(data));
        setActive(true);
        reset();
    };

    return (
        <div className='offer-form'>
            <h1>{t("formToFill")}</h1>
            <p className='offer-form__all-fields'>*{t("fieldsAll")}</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='firstName'>
                    <h4>
                        {t("firstName")}
                    </h4>
                    <input
                        placeholder={t("name")}
                        type='text'
                        {...register('firstName', {
                            required: t("needToFill"),
                            minLength: {
                                value: 2,
                                message: t("needMoreSymbols"),
                            },
                            maxLength: {
                                value: 32,
                                message: t("lessSymbols"),
                            },
                        })}
                    />
                </label>
                <div className='offer-form__first-name__errors'>
                    {errors?.firstName?.message && <p>{errors?.firstName?.message}</p>}
                </div>

                <label htmlFor='lastName'>
                    <h4>
                        {t("secondName")}
                    </h4>
                    <input
                        placeholder={t("surname")}
                        type='text'
                        {...register('lastName', {
                            required: t("needToFill"),
                            minLength: {
                                value: 2,
                                message: t("needMoreSymbols"),
                            },
                            maxLength: {
                                value: 32,
                                message: t("lessSymbols"),
                            },
                        })}
                    />
                </label>
                <div className='offer-form__first-name__errors'>
                    {errors?.lastName?.message && <p>{errors?.lastName?.message}</p>}
                </div>

                <label htmlFor='email'>
                    <h4>
                        {t("email")}
                    </h4>
                    <input
                        placeholder={t("typeHere")}
                        type='email'
                        {...register('email', {
                            required: t("needToFill"),
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: t("errorEmail"),
                            },
                        })}
                    />
                </label>
                <div className='offer-form__first-name__errors'>
                    {errors?.email?.message && <p>{errors?.email?.message}</p>}
                </div>

                <label htmlFor='phoneNumber'>
                    <h4>
                        {t("number")}
                    </h4>
                    <input
                        placeholder={t("typeHere")}
                        type='tel'
                        {...register('phoneNumber', {
                            required: t("needToFill"),
                            pattern: {
                                value: /^(?:\+380|0)\d{9}$/,
                                message: t("errorNumber"),
                            },
                        })}
                    />
                </label>

                <div className='offer-form__first-name__errors'>
                    {errors?.phoneNumber?.message && <p>{errors?.phoneNumber?.message}</p>}
                </div>

                <button className={isValid ? 'offer-form__submit-button' : 'one-offer__custom-button-disabled'} disabled={!isValid} type='submit'>
                    <span>
                        {t("send")}
                    </span>
                    <i></i>
                </button>
            </form>
            <ModalOffer active={active} setActive={setActive}/>
        </div>
    );
}
