import React, { Suspense } from 'react'
import { Provider } from 'react-redux'
import { withTranslation } from 'react-i18next'
import configureStore from '../../store/store'
import AppoloProvider from './AppoloProvider'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import LoaderScreen from '../../component/CustomLoading/LoaderScreen'

toast.configure()

const Container = () => <AppoloProvider />

const Wrapper = withTranslation()(Container)

const App = () => (
	<Suspense fallback={<LoaderScreen />}>
		<Provider store={configureStore()}>
			<Wrapper />
		</Provider>
	</Suspense>
)

export default App