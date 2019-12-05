import axios from 'axios'

export const validationForm = async values => {
    let errors = {};

    try {
        const { data: result } = await axios.post(
            `${process.env.REACT_APP_API}/validate/signup`,
            values
        );

        return { ...errors, ...result };
    } catch (err) {
        throw err;
    }
};