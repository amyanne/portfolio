import SocialMediaButtons from 'react-social-media-buttons';
 
export const MyComponent = () => {
  const links = ['https://github.com/amyanne', 'https://www.linkedin.com/in/amy-westcott/'];
 
  const buttonStyle = {
    backgroundColor: '#000000',
    borderRadius: '50%',
  };
 
  const iconStyle = { color: '#ffffff' };
 
  return (
    <div>
      <SocialMediaButtons buttonStyle={buttonStyle} iconStyle={iconStyle} />
    </div>
  );
};
