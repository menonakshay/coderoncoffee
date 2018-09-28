import React from 'react'
import PropTypes from 'prop-types'

import { getUserRole } from './utils/auth'

class AuthorizedComponent extends React.Component {
    validatePermission() {
        const { route } = this.props
        const { router } = this.context

        const userRole = getUserRole()
        if (!userRole) {
            router.push('/')
        }
        if (route.authorize.indexOf(userRole) < 0) {
            router.push('/not_authorized')
        }
    }
}

AuthorizedComponent.propTypes = {
    route: PropTypes.array.isRequired,
}

AuthorizedComponent.contextTypes = {
    router: PropTypes.object.isRequired,
}

export default AuthorizedComponent