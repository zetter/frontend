package http

import akka.stream.Materializer
import model.ApplicationContext
import play.api.Configuration
import play.api.http.HttpFilters
import play.filters.headers.SecurityHeadersComponents

import scala.concurrent.ExecutionContext

class IdentityFilters(config: Configuration)(implicit mat: Materializer, context: ApplicationContext, executionContext: ExecutionContext) extends HttpFilters with SecurityHeadersComponents {

  def configuration: Configuration = config
  val filters =  securityHeadersFilter:: new HeaderLoggingFilter :: new StrictTransportSecurityHeaderFilter :: Filters.common
}
