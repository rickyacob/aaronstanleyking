<script>
	import {
		Content,
		Breadcrumb,
		BreadcrumbItem,
		Grid,
		Row,
		Column,
		Tabs,
		TabContent,
		Tab
	} from "carbon-components-svelte";
	import Header from "./components/Header.svelte";
	import Theme from "./components/Theme.svelte";
	let theme = "g10";

	export let name;
</script>

<style lang="scss" global>
	/** Gray 10 theme **/
	@import "carbon-components-svelte/css/g10";
</style>

<Theme persist bind:theme>
	<Header />
	<Content style="background: none; padding: 1rem">
		<Grid>
			<Row>
				<Column lg={16}>
					<Breadcrumb noTrailingSlash aria-label="Page navigation">
						<BreadcrumbItem href="/">
							Home
						</BreadcrumbItem>
					</Breadcrumb>
					<h1 style="margin-bottom: 1.5rem">
						<h1>Hello {name}!</h1>
					</h1>
				</Column>
			</Row>
			<Row>
				<Column noGutter>
					<Tabs aria-label="Tab navigation">
						<Tab label="About" />
						<Tab label="Design" />
						<Tab label="Develop" />
						<div slot="content" class="tabbed-content">
							<Grid as fullWidth let:props>
								<TabContent {...props}>
									<Row>
										<Column md={4} lg={7}>
											<p>
												Carbon is IBM’s open-source
												design system for digital
												products and experiences. With
												the IBM Design Language as its
												foundation, the system consists
												of working code, design tools
												and resources, human interface
												guidelines, and a vibrant
												community of contributors.
											</p>
										</Column>
									</Row>
								</TabContent>
								<TabContent {...props}>
									<Row>
										<Column md={4} lg={7}>
											<p>
												Rapidly build beautiful and
												accessible experiences. The
												Carbon kit contains all
												resources you need to get
												started.
											</p>
										</Column>
									</Row>
								</TabContent>
								<TabContent {...props}>
									<Row>
										<Column md={4} lg={7}>
											<p>
												Carbon provides styles and
												components in Vanilla, React,
												Angular, Vue and Svelte for
												anyone building on the web.
											</p>
										</Column>
									</Row>
								</TabContent>
							</Grid>
						</div>
					</Tabs>
				</Column>
			</Row>
		</Grid>
	</Content>
</Theme>
