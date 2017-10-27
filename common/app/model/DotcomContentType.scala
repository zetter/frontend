package model

import com.gu.contentapi.client.model.v1.ContentType.{
Article => ApiArticle,
Liveblog => ApiLiveblog,
Picture => ApiPicture,
Gallery => ApiGallery,
Interactive => ApiInteractive,
Video => ApiVideo,
Crossword => ApiCrossword,
Audio => ApiAudio
}
import play.api.libs.json._
import com.gu.contentapi.client.model.v1.{Content => ApiContent}
import enumeratum._

// If you are reading this, you're probably trying to create a new Content Type.
// Please note that we send the content types to DFP for ad tracking.
// However, DFP will only recognise the content types from a specific PREDEFINED LIST.
//
// In DFP, this list is here:
// Inventory > Customised targeting > ct
//
// Please get Ad Ops to add it to the list BEFORE adding a new content type here if you want to be able to track this content type

sealed trait DotcomContentType extends EnumEntry {
  val name: String = entryName
}
object DotcomContentType extends Enum[DotcomContentType] with PlayJsonEnum[DotcomContentType] {

  val values = findValues

  case object Unknown extends DotcomContentType
  case object Article extends DotcomContentType
  case object NetworkFront extends DotcomContentType { override def entryName: String = "Network Front" }
  case object Section extends DotcomContentType
  case object ImageContent extends DotcomContentType
  case object Interactive extends DotcomContentType
  case object Gallery extends DotcomContentType
  case object Video extends DotcomContentType
  case object Audio extends DotcomContentType
  case object LiveBlog extends DotcomContentType
  case object Tag extends DotcomContentType
  case object TagIndex extends DotcomContentType { override def entryName: String = "Index" }
  case object Crossword extends DotcomContentType
  case object Survey extends DotcomContentType
  case object Signup extends DotcomContentType
  case object Identity extends DotcomContentType { override def entryName: String = "userid" }

  def apply(apiContent: ApiContent): Option[DotcomContentType] = {
    apiContent.`type` match {
      case ApiArticle => Some(DotcomContentType.Article)
      case ApiLiveblog => Some(DotcomContentType.LiveBlog)
      case ApiGallery => Some(DotcomContentType.Gallery)
      case ApiInteractive => Some(DotcomContentType.Interactive)
      case ApiPicture => Some(DotcomContentType.ImageContent)
      case ApiVideo => Some(DotcomContentType.Video)
      case ApiCrossword => Some(DotcomContentType.Crossword)
      case ApiAudio => Some(DotcomContentType.Audio)
      case _ => None
    }
  }
}
