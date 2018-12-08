import React, { Component } from 'react'
import { Button, Icon, Input } from 'semantic-ui-react'
// import * as process from './process'
import connected from '../../../state/setup/connect'
import { Page, Content, Form, Row } from './styles'
import * as registerActions from '../../../state/processes/register/actions'
class CreateAccount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      surname: '',
      username: '',
      password: '',
      confirmedPassword: '',
      email: ''
    }
  }

  handleInput = field => event => {
    this.setState({ [field]: event.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.registerActions.registerUser({...this.state})
  }

  render() {
    return (
      <Page>
        <Content>
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <Input placeholder="First name" type="text" onChange={this.handleInput('firstName')} />
              <Input placeholder="Last name" type="text" onChange={this.handleInput('surname')} />
            </Row>
            <Row>
              <Input icon="user" placeholder="Username" type="text" onChange={this.handleInput('username')} />
            </Row>
            <Row>
              <Input icon="mail" placeholder="Email" type="text" onChange={this.handleInput('email')} />
            </Row>
            <Row>
              <Input icon="lock" placeholder="Password" type="password" onChange={this.handleInput('password')} />
            </Row>
            <Row>
              <Input icon="lock" placeholder="Confirm password" type="password" onChange={this.handleInput('confirmedPassword')} />
            </Row>
            <Button type="submit" animated color="green">
              <Button.Content visible>Create Account</Button.Content>
              <Button.Content hidden>
                <Icon name="right arrow" />
              </Button.Content>
            </Button>
          </Form>
        </Content>
      </Page>
    )
  }
}

export default (connected([], [registerActions])(CreateAccount))
