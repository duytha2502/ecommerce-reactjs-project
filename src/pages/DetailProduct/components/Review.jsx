import Button from '../../../components/Button/Button';
import FormItem from './FormItem';
import styles from '../styles.module.scss';

function Review() {
    const {
        containerReview,
        reviews,
        noreview,
        replyFrom,
        commentReplyTitle,
        commentNote,
        commentFormCookiesConsent,
        btnSubmit
    } = styles;
    return (
        <div className={containerReview}>
            <div className={reviews}>1</div>

            <p className={noreview}>2</p>

            <div className={replyFrom}>
                <div className={commentReplyTitle}>3</div>

                <p className={commentNote}>4</p>

                <form action=''>
                    <FormItem
                        label={'Your Rating'}
                        isRequired
                        typeChildren='rating'
                    />

                    <FormItem
                        label={'Your review'}
                        isRequired
                        typeChildren='textarea'
                    />

                    <FormItem label={'Name'} isRequired typeChildren='input' />

                    <FormItem label={'Email'} isRequired typeChildren='input' />

                    <div className={commentFormCookiesConsent}>
                        <input type='checkbox' />
                        <span>
                            {' '}
                            Save my name, email, and website in this browser for
                            the next time I comment.
                        </span>
                    </div>

                    <div className={btnSubmit}>
                        <Button content='SUBMIT' />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Review;
