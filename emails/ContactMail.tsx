import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';

export const ContactMail = (
  name:string,
  email: string,
  message: string,
) => {
  const previewText = `Read ${name}'s review`;
  return (
    <>
      <Head />
      <Preview>{previewText}</Preview>

      <Body style={main}>
        <Section style={main}>
          <Container style={container}>
            <Text style={header}>AUOps</Text>
            <Section style={{ paddingBottom: '20px' }}>
              <Row>
                <Text style={heading}>Here&apos;s what {name} wrote</Text>
                <Text style={review}>{message}</Text>
                <Text style={paragraph}>
                  {name}, email is: {email}
                </Text>
                <Text style={{ ...paragraph, paddingBottom: '16px' }}>
                  While it’s not too late to write a response of your own, you can
                  send your feedback to {name} using your his email
                </Text>
                <Button style={button} href={`mailto:${email}`}>
                  Send My Feedback
                </Button>
              </Row>
            </Section>

            <Hr style={hr} />

            <Section>
              <Row>
                <Text style={footer}>
                  AUOps, Inc., 888 Brannan St, San Francisco, CA 00002
                </Text>
                <Link href="https://linkedin\in\nnorom.com" style={reportLink}>
                  Report unsafe behavior
                </Link>
              </Row>
            </Section>
          </Container>
        </Section>
      </Body>
    </>
  );
};

export default ContactMail;

const main = {
  backgroundColor: '#ffffff',
  fontFamily: "Raleway, sans-serif"
};

const header = {
  display: 'flex',
  justifyContent: 'center',
  fontSize: '50px',
  color: '#0FABBE',
  fontWeight: 700
}

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '580px',
};

const heading = {
  fontSize: '32px',
  lineHeight: '1.3',
  fontWeight: '700',
  color: '#484848',
};

const paragraph = {
  fontSize: '18px',
  lineHeight: '1.4',
  color: '#484848',
};

const review = {
  ...paragraph,
  padding: '24px',
  backgroundColor: '#f2f3f3',
  borderRadius: '4px',
};

const button = {
  backgroundColor: '#ff5a5f',
  borderRadius: '3px',
  color: '#fff',
  fontSize: '18px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  width: '100%',
  padding: '19px'
};

const link = {
  ...paragraph,
  color: '#ff5a5f',
  display: 'block',
};

const reportLink = {
  fontSize: '14px',
  color: '#9ca299',
  textDecoration: 'underline',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const footer = {
  color: '#9ca299',
  fontSize: '14px',
  marginBottom: '10px',
};