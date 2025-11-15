import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	PanelColorSettings,
	RichText,
	URLInputButton,
} from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	RangeControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';

const Edit = ({ attributes, setAttributes }) => {
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

	const blockStyles = {
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
	};

	const blockProps = useBlockProps({
		className: 'eb-hero-left w-full',
		style: blockStyles,
	});

	const layoutClasses = [
		'flex flex-col gap-10 lg:items-center lg:gap-12',
		swapSides ? 'lg:flex-row-reverse' : 'lg:flex-row',
	].join(' ');

	const handleImageSelect = (media) => {
		setAttributes({
			imageUrl: media?.url || '',
			imageAlt: media?.alt || '',
		});
	};

	const textGroup = ({
		thinValue,
		thickValue,
		supportValue,
		onThinChange,
		onThickChange,
		onSupportChange,
		groupClass,
	}) => (
		<div className={`flex flex-col gap-5 ${groupClass}`}>
			<div className="flex flex-col gap-0">
				<RichText
					tagName="p"
					className="eb-hero-left__heading--thin font-light leading-none"
					value={thinValue}
					onChange={onThinChange}
					placeholder={__('Add thin headline…', 'ewenique')}
					style={{ color: headingThinColor || '#0f172a' }}
				/>
				<RichText
					tagName="h2"
					className="eb-hero-left__heading--thick font-extrabold leading-none"
					value={thickValue}
					onChange={onThickChange}
					placeholder={__('Add thick headline…', 'ewenique')}
					style={{ color: headingThickColor || '#0f9fbe' }}
				/>
			</div>
			<RichText
				tagName="div"
				multiline="p"
				className="eb-hero-left__supporting text-base md:text-lg leading-relaxed"
				value={supportValue}
				onChange={onSupportChange}
				placeholder={__('Add supporting copy…', 'ewenique')}
				style={{ color: textColor || '#475569' }}
			/>
		</div>
	);

	const renderImage = () =>
		imageUrl ? (
			<img
				src={imageUrl}
				alt={imageAlt}
				className="w-full rounded object-cover max-h-[300px] md:max-h-[400px] lg:max-h-none"
			/>
		) : (
			<div className="w-full h-60 border border-dashed border-gray-300 rounded flex items-center justify-center text-gray-500">
				{__('Select an image to display', 'ewenique')}
			</div>
		);

	return (
		<>
			<InspectorControls>
				<PanelColorSettings
					title={__('Color Settings', 'ewenique')}
					initialOpen={true}
					colorSettings={[
						{
							value: wrapperBg,
							onChange: (color) =>
								setAttributes({ wrapperBg: color || '#ffffff' }),
							label: __('Wrapper background', 'ewenique'),
						},
						{
							value: headingThinColor,
							onChange: (color) =>
								setAttributes({ headingThinColor: color || '#0f172a' }),
							label: __('Thin headline color', 'ewenique'),
						},
						{
							value: headingThickColor,
							onChange: (color) =>
								setAttributes({ headingThickColor: color || '#0f9fbe' }),
							label: __('Thick headline color', 'ewenique'),
						},
						{
							value: textColor,
							onChange: (color) =>
								setAttributes({ textColor: color || '#475569' }),
							label: __('Body text color', 'ewenique'),
						},
						{
							value: ctaBgColor,
							onChange: (color) =>
								setAttributes({ ctaBgColor: color || '#111111' }),
							label: __('Button background', 'ewenique'),
						},
						{
							value: ctaTextColor,
							onChange: (color) =>
								setAttributes({ ctaTextColor: color || '#ffffff' }),
							label: __('Button text', 'ewenique'),
						},
					]}
				/>
				<PanelBody title={__('Typography (px)', 'ewenique')} initialOpen={false}>
					<div className="space-y-4">
						<p className="font-semibold">
							{__('Thin headline sizes', 'ewenique')}
						</p>
						<RangeControl
							label={__('Mobile', 'ewenique')}
							min={10}
							max={48}
							value={thinSizeMobile}
							onChange={(value) =>
								setAttributes({ thinSizeMobile: value || 18 })
							}
						/>
						<RangeControl
							label={__('Tablet', 'ewenique')}
							min={10}
							max={64}
							value={thinSizeTablet}
							onChange={(value) =>
								setAttributes({ thinSizeTablet: value || 20 })
							}
						/>
						<RangeControl
							label={__('Desktop', 'ewenique')}
							min={12}
							max={72}
							value={thinSizeDesktop}
							onChange={(value) =>
								setAttributes({ thinSizeDesktop: value || 22 })
							}
						/>
						<p className="font-semibold pt-2">
							{__('Thick headline sizes', 'ewenique')}
						</p>
						<RangeControl
							label={__('Mobile', 'ewenique')}
							min={12}
							max={64}
							value={thickSizeMobile}
							onChange={(value) =>
								setAttributes({ thickSizeMobile: value || 24 })
							}
						/>
						<RangeControl
							label={__('Tablet', 'ewenique')}
							min={16}
							max={80}
							value={thickSizeTablet}
							onChange={(value) =>
								setAttributes({ thickSizeTablet: value || 30 })
							}
						/>
						<RangeControl
							label={__('Desktop', 'ewenique')}
							min={20}
							max={96}
							value={thickSizeDesktop}
							onChange={(value) =>
								setAttributes({ thickSizeDesktop: value || 40 })
							}
						/>
					</div>
				</PanelBody>
				<PanelBody title={__('Layout Settings', 'ewenique')} initialOpen={false}>
					<ToggleControl
						label={__('Swap sides (desktop)', 'ewenique')}
						checked={swapSides}
						onChange={(value) => setAttributes({ swapSides: value })}
						help={__('Flips text and image order on large screens.', 'ewenique')}
					/>
				</PanelBody>
				<PanelBody title={__('Image Settings', 'ewenique')} initialOpen={false}>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={handleImageSelect}
							allowedTypes={['image']}
							render={({ open }) => (
								<Button
									variant={imageUrl ? 'secondary' : 'primary'}
									onClick={open}
								>
									{imageUrl
										? __('Replace image', 'ewenique')
										: __('Select image', 'ewenique')}
								</Button>
							)}
						/>
					</MediaUploadCheck>
					{imageUrl && (
						<Button
							variant="link"
							isDestructive
							onClick={() =>
								setAttributes({ imageUrl: '', imageAlt: '' })
							}
						>
							{__('Remove image', 'ewenique')}
						</Button>
					)}
					<TextControl
						label={__('Image alt text', 'ewenique')}
						value={imageAlt}
						onChange={(value) => setAttributes({ imageAlt: value })}
					/>
				</PanelBody>
				<PanelBody title={__('CTA Settings', 'ewenique')} initialOpen={false}>
					<URLInputButton
						label={__('CTA URL', 'ewenique')}
						url={ctaUrl}
						onChange={(url) =>
							setAttributes({ ctaUrl: url || '#' })
						}
					/>
				</PanelBody>
			</InspectorControls>

			<section {...blockProps}>
				<div className="max-w-[1024px] mx-auto px-6 md:px-8 py-12 md:py-16">
					<div className={layoutClasses}>
						<div className="flex-1 flex flex-col gap-8">
							{textGroup({
								thinValue: headingThinOne,
								thickValue: headingThickOne,
								supportValue: supportingOne,
								onThinChange: (value) =>
									setAttributes({ headingThinOne: value }),
								onThickChange: (value) =>
									setAttributes({ headingThickOne: value }),
								onSupportChange: (value) =>
									setAttributes({ supportingOne: value }),
								groupClass: 'eb-hero-left__group-one',
							})}
							<div className="lg:hidden">{renderImage()}</div>
							{textGroup({
								thinValue: headingThinTwo,
								thickValue: headingThickTwo,
								supportValue: supportingTwo,
								onThinChange: (value) =>
									setAttributes({ headingThinTwo: value }),
								onThickChange: (value) =>
									setAttributes({ headingThickTwo: value }),
								onSupportChange: (value) =>
									setAttributes({ supportingTwo: value }),
								groupClass: 'eb-hero-left__group-two',
							})}
							<div className="flex flex-col gap-4 sm:flex-row sm:items-center">
								<a
									className="inline-block px-6 py-3 rounded-md transition eb-hero-left__cta self-start sm:self-auto"
									href={ctaUrl || '#'}
									onClick={(event) => event.preventDefault()}
									style={{
										backgroundColor: ctaBgColor || '#111111',
										color: ctaTextColor || '#ffffff',
									}}
								>
									<RichText
										tagName="span"
										className="eb-hero-left__cta-text"
										value={ctaText}
										onChange={(value) =>
											setAttributes({ ctaText: value })
										}
										placeholder={__('Get Started', 'ewenique')}
										allowedFormats={[]}
									/>
								</a>
							</div>
						</div>
						<div className="flex-1 eb-hero-left__image w-full hidden lg:block">
							{renderImage()}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Edit;
