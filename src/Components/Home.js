import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Search,
  Segment,
} from "semantic-ui-react";

export default function Home() {
  return (
    <>
      <h1>Welcome, Home Page</h1>
      <Segment placeholder>
        <Grid columns={2} stackable textAlign="center">
          <Divider vertical>Or</Divider>

          <Grid.Row verticalAlign="middle">
            <Grid.Column>
              <Header icon>
                <Icon name="search" />
                Find Country
              </Header>

              <Search placeholder="Search countries..." />
            </Grid.Column>

            <Grid.Column>
              <Header icon>
                <Icon name="world" />
                Add New Country
              </Header>
              <Button primary>Create</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
}
