package navigation

import common.{Edition, Navigation, editions}
import _root_.model.Page
import navigation.NavLinks2._
import NavLinks._

import scala.annotation.tailrec

sealed trait NavNode {
  def children: Seq[NavLink2]
}

case class NavLink2(
 id: String,
 url: String,
 title: String,
 longDisplayName: Option[String] = None,
 children: Seq[NavLink2] = Nil
) extends NavNode

case class NavRoot private(val children: Seq[NavLink2]) extends NavNode {

  def findDescendantById(id: String): Option[NavLink2] = {

    @tailrec
    def find(children: Seq[NavLink2]): Option[NavLink2] = {
      children match {
        case Nil => None
        case head :: tail if (head.id == id) => Some(head)
        case head :: tail => find(tail ++ head.children)
      }
    }
    find(children)
  }

}

object NavRoot {
  def apply(edition: Edition): NavRoot = {
    edition match {
      case editions.Uk => NavRoot(Seq(ukNewsPillar, ukSportPillar, ukOpinionPillar, ukArtsPillar, ukLifePillar))
      case editions.Us => NavRoot(Seq(usNewsPillar, usSportPillar, usOpinionPillar, usArtsPillar, usLifePillar))
      case editions.Au => NavRoot(Seq(auNewsPillar, auSportPillar, auOpinionPillar, auArtsPillar, auLifePillar))
      case editions.International => NavRoot(Seq(auNewsPillar, auSportPillar, auOpinionPillar, auArtsPillar, auLifePillar))
    }
  }

}

case class NavMenu private (page: Page, tree: NavRoot) {

  def currentId: String = NavMenu.getSectionOrPageId(page)
  def pillars = tree.children

  def currentNav: Option[NavLink2] = tree.findDescendantById(currentId)
  def currentPillar: Option[NavLink2] = throw new NotImplementedError() //TODO
  def subNavSections: Seq[NavLink2] = throw new NotImplementedError() //TODO
}

object NavMenu {

  def apply(page: Page, edition: Edition): NavMenu = NavMenu(page, NavRoot(edition))

  def getSectionOrPageId(page: Page): String = {
    val frontLikePages = List(
      "theguardian",
      "observer",
      "football/live",
      "football/tables",
      "football/competitions",
      "football/results",
      "football/fixtures",
      "type/cartoon",
      "cartoons/archive"
    )
    val tags = Navigation.getTagsFromPage(page)
    val commonKeywords = tags.keywordIds.intersect(tagPages).sortWith(tags.keywordIds.indexOf(_) < tags.keywordIds.indexOf(_))
    val isTagPage = (page.metadata.isFront || frontLikePages.contains(page.metadata.id)) && tagPages.contains(page.metadata.id)
    val isArticleInTagPageSection = commonKeywords.nonEmpty

    // opinion pieces should always clearly be opinion pieces, regardless of other keywords
    if (page.metadata.sectionId == "commentisfree") {
      page.metadata.sectionId
    } else if (isTagPage) {
      simplifySectionId(page.metadata.id)
    } else if (isArticleInTagPageSection) {
      simplifySectionId(commonKeywords.head)
    } else {
      simplifySectionId(page.metadata.sectionId)
    }
  }

  private def simplifySectionId(sectionId: String): String = {
    val sectionMap = Map(
      "money/property" -> "money",
      "money/pensions" -> "money",
      "money/savings" -> "money",
      "money/debt" -> "money",
      "money/work-and-careers" -> "money",
      "world/europe-news" -> "world",
      "world/americas" -> "world",
      "world/asia" -> "world",
      "education" -> "uk-news",
      "media" -> "uk-news",
      "society" -> "uk-news",
      "law" -> "uk-news",
      "scotland" -> "uk-news",
      "business/economics" -> "business",
      "business/banking" -> "business",
      "business/retail" -> "business",
      "business/stock-markets" -> "business",
      "business/eurozone" -> "business",
      "us/sustainable-business" -> "business",
      "business/us-small-business" -> "business",
      "environment/climate-change" -> "environment",
      "environment/wildlife" -> "environment",
      "environment/energy" -> "environment",
      "environment/pollution" -> "environment",
      "travel/uk" -> "travel",
      "travel/europe" -> "travel",
      "travel/usa" -> "travel",
      "travel/skiing" -> "travel",
      "travel/australasia" -> "travel",
      "travel/asia" -> "travel"
    )
    sectionMap.getOrElse(sectionId, sectionId)
  }
}
