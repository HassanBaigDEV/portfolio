import sliceAnnotationLarge from '~/assets/slice-annotation-large.png';
import sliceAnnotationPlaceholder from '~/assets/slice-annotation-placeholder.png';
import sliceAnnotation from '~/assets/slice-annotation.png';
import sliceAppLarge from '~/assets/slice-app-large.jpg';
import sliceAppPlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceApp from '~/assets/slice-app.png';
import sliceBackgroundBarLarge from '~/assets/slice-background-bar-large.jpg';
import sliceBackgroundBarPlaceholder from '~/assets/slice-background-bar-placeholder.jpg';
import sliceBackgroundBar from '~/assets/slice-background-bar.jpg';
import sliceBackgroundLarge from '~/assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from '~/assets/slice-background-placeholder.jpg';
import sliceBackground from '~/assets/slice-background.jpg';
import sliceIrlPlaceholder from '~/assets/slice-irl-placeholder.jpg';
import sliceIrl from '~/assets/slice-irl.jpg';
import sliceSidebarAnnotationsLarge from '~/assets/slice-sidebar-annotations-large.png';
import sliceSidebarAnnotationsPlaceholder from '~/assets/slice-sidebar-annotations-placeholder.png';
import sliceSidebarAnnotations from '~/assets/slice-sidebar-annotations.png';
import sliceSidebarLayersLarge from '~/assets/slice-sidebar-layers-large.png';
import sliceSidebarLayersPlaceholder from '~/assets/slice-sidebar-layers-placeholder.png';
import sliceSidebarLayers from '~/assets/slice-sidebar-layers.png';
import sliceSlidesLarge from '~/assets/slice-slides-large.jpg';
import sliceSlidesPlaceholder from '~/assets/slice-slides-placeholder.jpg';
import sliceSlides from '~/assets/slice-slides.png';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './slice.module.css';

const title = 'Lumenta Digital';
const description =
  'This project involved devoloping a Digital Marketing Agency Web App using Next.js and Express.js';
const roles = ['Development', 'SEO Optimization', 'API Integration'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Slice = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground} 1280w, ${sliceBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://lumentadigital.com"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${sliceApp} 800w, ${sliceApp} 1920w`}
              width={800}
              height={500}
              placeholder={sliceAppPlaceholder}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>
                Simplifying SEO Package Choices
              </ProjectSectionHeading>
              <ProjectSectionText>
                In a competitive digital landscape, business owners needed a
                straightforward way to understand and select the right SEO plan tailored
                to their needs. Before this, deciding between multiple SEO packages often
                felt overwhelming due to feature overload and unclear distinctions between
                tiers.
              </ProjectSectionText>
              <ProjectSectionText>
                Our solution is to present a clear, side-by-side comparison of SEO
                packages. Each plan outlines key features and provides transparency by
                specifying the number of services included.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${sliceSidebarLayers} 350w, ${sliceSidebarLayers} 700w`}
                width={1350}
                height={1750}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${sliceSidebarLayers} 350w, ${sliceSidebarLayers} 700w`}
                width={1350}
                height={1750}
                placeholder={sliceSidebarAnnotationsPlaceholder}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>
                Streamlined Contact Experience
              </ProjectSectionHeading>
              <ProjectSectionText>
                We recognized the need for a more intuitive way for clients to get in
                touch, so we developed an enhanced contact interface. This form
                prioritizes simplicity and accessibility, ensuring users can quickly
                provide essential details like name, contact information, and service
                requirements.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${sliceSlides} 800w, ${sliceSlides} 1920w`}
              width={800}
              height={500}
              placeholder={sliceSlidesPlaceholder}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        {/* <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={`${sliceBackgroundBar} 440w, ${sliceBackgroundBarLarge} 880w`}
                  width={440}
                  height={790}
                  placeholder={sliceBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              <div className={styles.gridForeground}>
                <Image
                  srcSet={`${sliceAnnotation} 440w, ${sliceAnnotationLarge} 880w`}
                  width={440}
                  height={340}
                  placeholder={sliceAnnotationPlaceholder}
                  alt="An annotation preview popover with statistics for shape perimeter and area."
                  sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Meaningful details</ProjectSectionHeading>
              <ProjectSectionText>
                Marking and annotating areas on high resolution biomedical images is the
                core experience of the app, and it was easy to get lost or lose sense of
                scale when zooming in on details. Adding measurements for the perimeter
                and area of an annotation both helped to communicate the overall scale of
                the image and how large the annotated feature is in comparison.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection> */}
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                The website delivered a significant boost in user
                engagement and lead generation for our clients. Through a combination of
                streamlined design and interactive features, users found it easier to
                explore services, subscribe to newsletters, and initiate contact. Feedback
                from clients indicated that the website’s clean interface and organized
                layout improved user retention, while the interactive service selection
                feature allowed potential clients to explore offerings in a personalized
                manner.
                <br />
                <br /> Users also appreciated the intuitive navigation and quick access to
                valuable resources, resulting in increased satisfaction and a stronger
                brand connection. Overall, the project achieved its goals of enhancing
                visibility, driving conversions, and creating a seamless user experience
                across all devices.
              </ProjectSectionText>
            </ProjectTextRow>
            {/* <Image
              src={sliceIrl}
              width={940}
              height={500}
              placeholder={sliceIrlPlaceholder}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            /> */}
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
