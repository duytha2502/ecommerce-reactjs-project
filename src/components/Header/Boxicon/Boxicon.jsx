import styles from '../styles.module.scss';
import fbIcon from '../../../assets/icons/svgs/fbicon.svg';
import insIcon from '../../../assets/icons/svgs/instaicon.svg';
import ytbIcon from '../../../assets/icons/svgs/youtubeicon.svg';

function BoxIcon({ type }) {
  const { boxIcon } = styles;

  const handleRenderIcon = (type) => {
    switch (type) {
      case 'fb':
        return fbIcon;
      case 'ins':
        return insIcon;
      case 'ytb':
        return ytbIcon;
    }
  };

  return (
    <div className={boxIcon}>
      <img src={handleRenderIcon(type)} alt={type} />
    </div>
  );
}

export default BoxIcon;
