import { RichText, useBlockProps } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
	const {
		wrapperBg,
		headingThinColor,
		headingThickColor,
		textColor,
		thinSizeMobile,
		thinSizeTablet,
		thinSizeDesktop,
		thickSizeMobile,
		thickSizeTablet,
		thickSizeDesktop,
		swapSides,
		headingThinOne,
		headingThickOne,
		supportingOne,
		headingThinTwo,
		headingThickTwo,
		supportingTwo,
		imageUrl,
		imageAlt,
		ctaText,
		ctaUrl,
		ctaBgColor,
		ctaTextColor,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: 'eb-hero-left w-full',
		style: {
			backgroundColor: wrapperBg || '#ffffff',
			'--eb-hero-thin-mobile': thinSizeMobile
				? `${thinSizeMobile}px`
				: undefined,
			'--eb-hero-thin-tablet': thinSizeTablet
				? `${thinSizeTablet}px`
				: undefined,
			'--eb-hero-thin-desktop': thinSizeDesktop
				? `${thinSizeDesktop}px`
				: undefined,
			'--eb-hero-thick-mobile': thickSizeMobile
				? `${thickSizeMobile}px`
				: undefined,
			'--eb-hero-thick-tablet': thickSizeTablet
				? `${thickSizeTablet}px`
				: undefined,
			'--eb-hero-thick-desktop': thickSizeDesktop
				? `${thickSizeDesktop}px`
				: undefined,
		},
	});

	const layoutClasses = [
		'flex flex-col gap-10 lg:items-center lg:gap-12',
		swapSides ? 'lg:flex-row-reverse' : 'lg:flex-row',
	].join(' ');

	const textGroup = (groupClass, thinValue, thickValue, supportValue) => {
		if (!thinValue && !thickValue && !supportValue) {
			return null;
		}

		return (
			<div className={`flex flex-col gap-5 ${groupClass}`}>
				<div className="flex flex-col gap-0">
					{thinValue && (
						<RichText.Content
							tagName="p"
							className="eb-hero-left__heading--thin font-light leading-none"
							value={thinValue}
							style={{ color: headingThinColor || '#0f172a' }}
						/>
					)}
					{thickValue && (
						<RichText.Content
							tagName="h2"
							className="eb-hero-left__heading--thick font-extrabold leading-none"
							value={thickValue}
							style={{ color: headingThickColor || '#0f9fbe' }}
						/>
					)}
				</div>
				{supportValue && (
					<RichText.Content
						tagName="div"
						multiline="p"
						className="eb-hero-left__supporting text-base md:text-lg leading-relaxed"
						value={supportValue}
						style={{ color: textColor || '#475569' }}
					/>
				)}
			</div>
		);
	};

	const renderImage = () =>
		imageUrl ? (
			<img
				src={imageUrl}
				alt={imageAlt || ''}
				className="w-full rounded object-cover max-h-[300px] md:max-h-[400px] lg:max-h-none"
			/>
		) : null;

	return (
		<section {...blockProps}>
			<div className="max-w-[1024px] mx-auto px-6 md:px-8 py-12 md:py-16">
				<div className={layoutClasses}>
					<div className="flex-1 flex flex-col gap-8">
						{textGroup(
							'eb-hero-left__group-one',
							headingThinOne,
							headingThickOne,
							supportingOne
						)}
						{imageUrl && <div className="lg:hidden">{renderImage()}</div>}
						{textGroup(
							'eb-hero-left__group-two',
							headingThinTwo,
							headingThickTwo,
							supportingTwo
						)}
						{ctaText && (
							<div className="flex flex-col gap-4 sm:flex-row sm:items-center">
								<a
									className="inline-block px-6 py-3 rounded-md transition eb-hero-left__cta self-start sm:self-auto"
									href={ctaUrl || '#'}
									style={{
										backgroundColor: ctaBgColor || '#111111',
										color: ctaTextColor || '#ffffff',
									}}
								>
									<RichText.Content
										tagName="span"
										className="eb-hero-left__cta-text"
										value={ctaText}
									/>
								</a>
							</div>
						)}
					</div>
					<div className="flex-1 eb-hero-left__image w-full hidden lg:block">
						{renderImage()}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Save;
