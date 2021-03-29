<template>
  		<!-- login content section start -->
		<section class="pages login-page section-padding">
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<div class="main-input padding60 new-customer">
							<div class="log-title">
								<h3><strong>new customers</strong></h3>
							</div>
							<div class="custom-input">
								<form action="mail.php" method="post">
									<input type="text" name="name" placeholder="Name here.." />
									<input type="text" name="email" placeholder="Email Address.." />
									<input type="text" name="number" placeholder="Phone Number.." />
									<input type="text" name="address" placeholder="Password" />
									<input type="password" name="password" placeholder="Confirm Password" />
									<label class="first-child">
										<input type="radio" name="rememberme" value="forever">
										Sign up for our newsletter!
									</label>
									<div class="submit-text coupon">
										<a href="my-account.html">Register</a>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- login content section end -->
</template>

<style scoped>
.main-input{
    width: 600px;
    margin: auto;
    background: #ddd;
}
@media screen and (max-width: 490px) {
.main-input{
    width: 100%;
}
}
</style>
