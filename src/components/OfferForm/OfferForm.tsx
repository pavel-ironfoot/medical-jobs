import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import './OfferForm.scss';

type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
};

export const OfferForm = () => {
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
        reset();
    };

    return (
        <div className='offer-form'>
            <h1>{t("formToFill")}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='firstName'>
                    <h4>
                        {t("firstName")}
                    </h4>
                    <input
                        placeholder={t("name")}
                        type='text'
                        {...register('firstName', {
                            required: 'need to fill',
                            minLength: {
                                value: 5,
                                message: 'need more symbols',
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
                            required: 'need to fill',
                            minLength: {
                                value: 5,
                                message: 'need more symbols',
                            },
                            maxLength: {
                                value: 32,
                                message: 'less symbols',
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
                            required: 'need to fill',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'invalid email address',
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
                            required: 'need to fill',
                            pattern: {
                                value: /^(?:\+380|0)\d{9}$/,
                                message: 'invalid phone number',
                            },
                        })}
                    />
                </label>

                <div className='offer-form__first-name__errors'>
                    {errors?.phoneNumber?.message && <p>{errors?.phoneNumber?.message}</p>}
                </div>

                <button className={isValid ? 'one-offer__custom-button' : 'one-offer__custom-button-disabled'} disabled={!isValid} type='submit'>{t("send")}</button>
            </form>
        </div>
    );
}
